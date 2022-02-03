class SiteHeader extends HTMLElement{
    constructor() {
        super();

        this.innerHTML =  
        `
        <div class="container-fluid" id="navigation-bar">       
            <nav class="navbar navbar-expand-sm fixed-top trans-bg">
                <div class="container-fluid">
                    <a class=navbar-brand href="/Pages/index.html">
                        <img id="logo" src="/Images/2819 Logo.png">
                    </a>
                    <ul class="navbar-nav">
                        <li id="nav-dropdown1" class="nav-item dropdown">
                            <a class="nav-link" href="" data-bs-toggle="dropdown">For Givers</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/Pages/For Givers.html">Getting Started</a></li>
                                <li><a class="dropdown-item" href="/Pages/Giver Pages/Giving Opportunities.html">Giving Opportunities</a></li>
                                <li><a class="dropdown-item" href="/Pages/Giver Pages/Giving FAQs.html">FAQs</a></li>
                            </ul>
                        </li>
                        <li id="nav-dropdown2" class="nav-item dropdown">
                            <a class="nav-link" href="" data-bs-toggle="dropdown">For Missionaries</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/Pages/For Missionaries.html">Getting Started</a></li>
                                <li><a class="dropdown-item" href="/Pages/Missionary Pages/Fundraising Encouragement.html">Encouragement</a></li>
                                <li><a class="dropdown-item" href="/Pages/Missionary Pages/Fundraising Tips.html">Fundraising Tips</a></li>
                                <li><a class="dropdown-item" href="/Pages/Missionary Pages/Fundraising FAQs.html">FAQs</a></li>
                            </ul>
                        </li>
                    </ul>        
                    <div>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#signInModal">Sign In</button>
                        <a href="/Pages/Register Pages/Register.html"><button class="btn btn-primary" type="button">Register</button></a>
                    </div>
                </div>
            </nav>
        </div>

        <sign-in-modal></sign-in-modal>
        <script type=module src="/Pages/Web Elements/SignInModal.js"></script>`;
    }


}

window.customElements.define('site-header', SiteHeader)

