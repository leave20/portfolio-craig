import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="items-list">
                <li className="about-me">About me</li>
                <li className="knowledge">Knowledge</li>
                <li className="lets-go">Let’s work together</li>
                <li className="projects">Projects</li>
                <li className="testimonials">Testimonials</li>
            </ul>
        </div>
    );
}

export default Navbar;