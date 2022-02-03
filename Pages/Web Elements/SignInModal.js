class SignInModal extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <div class="modal fade" id="signInModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <p>Sign In</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <text>By continuing, you agree to our <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>.</text>
                        <div id="credential-section">
                            <input placeholder="USERNAME">
                            <input placeholder="PASSWORD">
                        </div>
                    
                        <button class="btn btn-primary">Sign In</button>
                    
                        <div>
                            <text>Forgot your <a href="#">username</a> or <a href="#">password</a>?</text><br>
                            <text>New to 28:19? <a href="/Pages/Register Pages/Register.html">Register</a></text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

window.customElements.define('sign-in-modal', SignInModal);