class PasswordGenerator {
    constructor() {
        this.characters = {
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
        };
        
        this.resultElement = document.getElementById('result');
        this.copyBtn = document.getElementById('copyBtn');
        this.generateBtn = document.getElementById('generateBtn');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generatePassword());
        this.copyBtn.addEventListener('click', () => this.copyPassword());
    }

    getSelectedCharacters() {
        let charSet = '';
        
        if (document.getElementById('low').checked) charSet += this.characters.lowercase;
        if (document.getElementById('up').checked) charSet += this.characters.uppercase;
        if (document.getElementById('num').checked) charSet += this.characters.numbers;
        if (document.getElementById('spe').checked) charSet += this.characters.symbols;
        
        return charSet;
    }

    generatePassword() {
        const charSet = this.getSelectedCharacters();
        const length = parseInt(document.getElementById('limit').value);

        if (charSet.length === 0 || isNaN(length) || length <= 0) {
            this.showError("Please select at least one option and provide a valid length.");
            return;
        }

        let password = '';
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);
        
        for (let i = 0; i < length; i++) {
            password += charSet.charAt(array[i] % charSet.length);
        }

        this.displayPassword(password);
    }

    displayPassword(password) {
        this.resultElement.textContent = password;
        this.resultElement.classList.add('generated');
    }

    async copyPassword() {
        const password = this.resultElement.textContent;
        
        if (password && password !== 'Your password will appear here') {
            try {
                await navigator.clipboard.writeText(password);
                this.showCopiedFeedback();
            } catch (err) {
                console.error('Failed to copy password:', err);
                this.showError('Failed to copy password to clipboard');
            }
        }
    }

    showCopiedFeedback() {
        const originalText = this.copyBtn.innerHTML;
        this.copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        `;
        
        setTimeout(() => {
            this.copyBtn.innerHTML = originalText;
        }, 1500);
    }

    showError(message) {
        this.resultElement.textContent = message;
        this.resultElement.style.color = 'var(--error)';
        
        setTimeout(() => {
            this.resultElement.style.color = 'var(--text)';
            this.resultElement.textContent = 'Your password will appear here';
        }, 3000);
    }
}

// Initialize the password generator when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
});