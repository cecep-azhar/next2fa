// Function to decode base32 secret key
function base32Decode(base32) {
    const base32Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let decoded = [];

    for (let i = 0; i < base32.length; i++) {
        const char = base32[i].toUpperCase();
        const val = base32Chars.indexOf(char);
        if (val === -1) {
            throw new Error("Invalid base32 character: " + char);
        }
        bits += val.toString(2).padStart(5, '0');
    }

    for (let i = 0; i + 7 < bits.length; i += 8) {
        const byte = parseInt(bits.substr(i, 8), 2);
        decoded.push(byte);
    }
    return new Uint8Array(decoded);
}

// Function to generate HMAC-SHA1
async function generateHmacSha1(key, message) {
    const keyBuffer = await crypto.subtle.importKey(
        "raw",
        key,
        { name: "HMAC", hash: { name: "SHA-1" } },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign(
        "HMAC",
        keyBuffer,
        message
    );
    return new Uint8Array(signature);
}

// Function to generate TOTP
async function generateTotp(secret, timeStep = 30, digits = 6) {
    const epoch = Math.floor(Date.now() / 1000);
    const time = Math.floor(epoch / timeStep);

    const timeBuffer = new ArrayBuffer(8);
    const view = new DataView(timeBuffer);
    view.setUint32(0, 0, false); // High 32 bits (always 0 for JS numbers)
    view.setUint32(4, time, false); // Low 32 bits

    const secretBytes = base32Decode(secret);
    const hmac = await generateHmacSha1(secretBytes, timeBuffer);

    const offset = hmac[hmac.length - 1] & 0x0f;
    const otp = (
        ((hmac[offset] & 0x7f) << 24) |
        ((hmac[offset + 1] & 0xff) << 16) |
        ((hmac[offset + 2] & 0xff) << 8) |
        (hmac[offset + 3] & 0xff)
    ) % Math.pow(10, digits);

    return otp.toString().padStart(digits, '0');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const secretKeyInput = document.getElementById('secretKey');
    const generateCodeBtn = document.getElementById('generateCode');
    const twofaCodeDisplay = document.getElementById('2faCode');
    const copyCodeBtn = document.getElementById('copyCode');
    const verificationResult = document.getElementById('verificationResult'); // Added for countdown

    // Extract key from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const keyFromUrl = urlParams.get('key');

    if (keyFromUrl) {
        secretKeyInput.value = keyFromUrl;
    }

    let countdownInterval;

    async function updateTotpCode() {
        const secretKey = secretKeyInput.value.trim();
        if (secretKey) {
            try {
                const code = await generateTotp(secretKey);
                twofaCodeDisplay.textContent = code;
                startCountdown();
            } catch (error) {
                twofaCodeDisplay.textContent = 'Error generating code.';
                console.error(error);
            }
        } else {
            twofaCodeDisplay.textContent = 'Please enter a secret key.';
            verificationResult.textContent = ''; // Clear countdown if no key
            clearInterval(countdownInterval);
        }
    }

    function startCountdown() {
        clearInterval(countdownInterval);
        const timeStep = 30; // TOTP time step in seconds
        const epoch = Math.floor(Date.now() / 1000);
        const timeRemaining = timeStep - (epoch % timeStep);

        let currentCountdown = timeRemaining;
        verificationResult.textContent = `New code in ${currentCountdown}s`;

        countdownInterval = setInterval(() => {
            currentCountdown--;
            if (currentCountdown <= 0) {
                clearInterval(countdownInterval);
                updateTotpCode(); // Generate new code when countdown finishes
            } else {
                verificationResult.textContent = `New code in ${currentCountdown}s`;
            }
        }, 1000);
    }

    // Initial code generation if key is present
    if (secretKeyInput.value) {
        updateTotpCode();
    }

    generateCodeBtn.addEventListener('click', updateTotpCode);

    generateCodeBtn.addEventListener('click', async () => {
        const secretKey = secretKeyInput.value.trim();
        if (secretKey) {
            try {
                const code = await generateTotp(secretKey);
                twofaCodeDisplay.textContent = code;
            } catch (error) {
                twofaCodeDisplay.textContent = 'Error generating code.';
                console.error(error);
            }
        } else {
            twofaCodeDisplay.textContent = 'Please enter a secret key.';
        }
    });

    copyCodeBtn.addEventListener('click', async () => {
        const codeToCopy = twofaCodeDisplay.textContent;
        if (codeToCopy && codeToCopy !== 'Please enter a secret key.' && codeToCopy !== 'Error generating code.') {
            try {
                await navigator.clipboard.writeText(codeToCopy);
                alert('2FA Code copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
                alert('Failed to copy 2FA Code.');
            }
        } else {
            alert('No code to copy. Generate a code first.');
        }
    });
});