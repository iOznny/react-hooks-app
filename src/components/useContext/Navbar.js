import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="./">Home</Link></li>
                <li><a href="./about">About</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}
