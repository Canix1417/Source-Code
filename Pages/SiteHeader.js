class SiteHeader extends HTMLElement{
    constructor() {
        super();

        this.innerHTML =  
        `
        <div class="container-fluid" id="navigation-bar">       
            <nav class="navbar navbar-expand-sm fixed-top trans-bg">
                <div class="container-fluid">
                    <a class=navbar-brand href="index.html">
                        <img id="logo" src="../Images/2819 Logo.png">
                    </a>
                    <ul class="navbar-nav">
                        <li id="nav-dropdown1" class="nav-item dropdown">
                            <a class="nav-link" href="" data-bs-toggle="dropdown">For Givers</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="For Givers.html">Getting Started</a></li>
                                <li><a class="dropdown-item" href="">Giving Opportunities</a></li>
                                <li><a class="dropdown-item" href="">FAQs</a></li>
                            </ul>
                        </li>
                        <li id="nav-dropdown2" class="nav-item dropdown">
                            <a class="nav-link" href="" data-bs-toggle="dropdown">For Missionaries</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="For Missionaries.html">Getting Started</a></li>
                                <li><a class="dropdown-item" href="">Encouragement</a></li>
                                <li><a class="dropdown-item" href="">Fundraising Tips</a></li>
                                <li><a class="dropdown-item" href="">FAQs</a></li>
                            </ul>
                        </li>
                    </ul>        
                    <div>
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#signInModal">Sign In</button>
                        <a href="Register Pages/Register.html"><button class="btn btn-primary" type="button">Register</button></a>
                    </div>
                </div>
            </nav>
        </div>`;
    }


}

window.customElements.define('site-header', SiteHeader)

