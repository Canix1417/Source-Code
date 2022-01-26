class SiteFooter extends HTMLElement{
    constructor() {
        super();

        this.innerHTML = 
        ` <div class="container-fluid" id="navigation-bar">
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <ul  class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">BLOG</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">TERMS OF USE</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">PRIVACY POLICY</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">COOKIE POLICY</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">CONTACT US</a></li>
                </ul>
            </div>
        </nav>
    </div>
        `;
    }
}

window.customElements.define("site-footer", SiteFooter);
