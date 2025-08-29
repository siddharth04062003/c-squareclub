
// Simple password protection for admin panel
class AdminAuth {
    constructor() {
        this.isAuthenticated = false;
        this.checkAuth();
    }
    
    checkAuth() {
        const isLoggedIn = sessionStorage.getItem('admin-auth');
        if (!isLoggedIn) {
            this.showLoginModal();
        } else {
            this.isAuthenticated = true;
        }
    }
    
    showLoginModal() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            ">
                <div style="
                    background: #1a1a2e;
                    padding: 30px;
                    border-radius: 15px;
                    border: 2px solid #00ffff;
                    text-align: center;
                ">
                    <h2 style="color: #00ffff; margin-bottom: 20px;">Admin Access Required</h2>
                    <input type="password" id="adminPassword" placeholder="Enter admin password" style="
                        width: 200px;
                        padding: 10px;
                        margin: 10px;
                        background: #000;
                        color: #fff;
                        border: 1px solid #00ffff;
                        border-radius: 5px;
                    ">
                    <br>
                    <button onclick="adminAuth.login()" style="
                        padding: 10px 20px;
                        background: #00ffff;
                        color: #000;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 10px;
                    ">Login</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;
    }
    
    login() {
        const password = document.getElementById('adminPassword').value;
        // Change this to your desired password
        if (password === 'csquare2024') {
            sessionStorage.setItem('admin-auth', 'true');
            this.isAuthenticated = true;
            document.body.removeChild(this.modal);
        } else {
            alert('Invalid password!');
        }
    }
}

// Initialize auth when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.adminAuth = new AdminAuth();
});
