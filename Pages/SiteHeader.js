class SiteHeader extends HTMLElement{
    constructor() {
        super();

        this.innerHTML =  
        `<header>
        <div style="text-align: center; background-color: lightblue;">
            <h style="font-size: 40px">Welcome to <b>28:19!</b></h>
            <p><em>A space for encouraging and giving generously to those looking to reflect Christ, love others, and share the gospel!</em></p>
        
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.html">28:19</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li>About Us</li>
                        <li><a href="../Pages/For Givers.html">For Givers</a></li>
                        <li><a href="../Pages/For Missionaries.html">For Missionaries</a></li>
                    </ul>
                        

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="Sign In.html">Login</li>
                    </ul>
                    <!-- Put in a clickable icon for loging in, signing up, our help. -->
                    <img style="display: flex;" src=../Images/No User Photo.png>
                   
                </div>
            <nav>
        </div>
        </header>`;
    }


}

window.customElements.define('site-header', SiteHeader)

