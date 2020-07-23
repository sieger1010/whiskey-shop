import React, { useEffect, useState } from 'react';
import './Navbar.scss';

function Navbar () {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const nav = document.getElementById('navContainer')

        document.addEventListener('scroll',() => {
            const scrollCheck = window.scrollY > 50
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
            if (scroll) {
                nav.classList.add('scrolled')
            }
            else {
                nav.classList.remove('scrolled')
            }
        })
    })

    return (        
    <div className="row m-0">
        <nav className="navbar fixed-top w-100 navbar-dark" id="navContainer">
            <a href="/" className="navbar-brand ml-5">
                <h1 className="logoFont">Whiskey Shop</h1>
            </a>
        </nav>				
    </div>         
    );
}
export default Navbar;