import React from 'react';
;

function NavBar(props) {
    return (
        <>
            <header>
                <nav className="">
                    <ul className="nav-links">
                        <img src="./assets/platform-logo.png" alt="platform logo"/>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Magazine</a></li>
                        <li><a href="#">Contact</a></li>
                        <button type="button" className="sign-up-button">Sign Up</button>
                        <button type="button" className="log-in-button">Log In</button>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;