import React from 'react';

function Header() {
    return (
        <div>
            <div class = "navbar">
                <ul>
                    <li> <a href="/"> Home </a></li>
                    <li> <a href="/about"> About </a></li>
                    <li> <a href="/post/10"> Posts 10 </a></li>
                    <li> <a href="/contact"> Contact </a></li>
                </ul>
            </div>
            <div className="header">
                Mój Blog
            </div>
        </div>
    )
}

export default Header;