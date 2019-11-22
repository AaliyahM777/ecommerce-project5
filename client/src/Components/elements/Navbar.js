import React from 'react';


/* created a  navbar functional component and it returns 
  how the navbar  links will dsiplay and look through bootstrap
  my icon on navbar
 */

function NavBar() {
    return(  
        // navbar is exapnded out of large screens like desktop laptops and fixed at top so even when we scroll through website it stays at top
        <nav className="navbar navbar-expand-lg fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar">
                <span className="navbar-toggler-icon">&#9776;</span>
            </button>

            <a className="navbar-brand" href="/products"><img src="LogoMakr_1Igl02.png" class="img-fluid"/> </a>
            <div className="collaspe navbar-collapse" id="navigation-bar">
                <ul className="navbar-nav ml-auto">
                    {/*My navbar links linking to each page withing website*/}
                    <li className="nav-item"> <a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/products">Our Products</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/contacts">Contact Us </a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;