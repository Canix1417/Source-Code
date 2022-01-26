class SiteHeader extends HTMLElement{
    constructor() {
        super();

        this.innerHTML =  
        ` <div class="container-fluid" id="navigation-bar">       
        <nav class="navbar navbar-expand-sm sticky-top">
            <div class="container-fluid">
                <!--Code for navbar brand-->
                <a class=navbar-brand href="index.html">
                    <img src="../Images/2819 Logo.png">
                </a>
                <ul class="navbar-nav">
                    <!--Code for navbar dropdown-->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">About Us</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="About Us Pages/Meet Our Team.html">Our Team</a></li>
                            <li><a class="dropdown-item" href="About Us Pages/Our Story.html">Our Story</a></li>
                        </ul> 
                    </li>
                    <li class="nav-link"><a href="For Givers.html">For Givers</a></li>
                    <li class="nav-link"><a href="For Missionaries.html">For Missionaries</a></li>
                    <li class="nav-link"><a href="#"></a></li>
                </ul>        
                <button class="btn btn-primary" type="button">Sign In</button>
                <button class="btn btn-primary" type="button">Register!</button>
            </div>
        </nav>
    </div>`;
    }


}

window.customElements.define('site-header', SiteHeader)

