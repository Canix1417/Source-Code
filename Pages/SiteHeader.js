class SiteHeader extends HTMLElement{
    constructor() {
        super();

        this.innerHTML =  
        ` <div class="container-fluid" id="navigation-bar">       
                <nav class="navbar navbar-expand-sm fixed-top trans-bg">
                    <div class="container-fluid">
                    <a class=navbar-brand href="index.html">
                        <img src="../Images/2819 Logo.png">
                    </a>
                    <ul class="navbar-nav">
                        <!--Code for navbar dropdown
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">About Us</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="About Us Pages/Meet Our Team.html">Our Team</a></li>
                            <li><a class="dropdown-item" href="About Us Pages/Our Story.html">Our Story</a></li>
                        </ul> 
                    </li>-->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown">For Givers</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="For Givers.html">Getting Started</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="For Missionaries.html">For Missionaries</a>
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

