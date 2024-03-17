import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import './NavBar.scss'; // Importa los estilos SCSS


export function NavBar() {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="Logo" />
            </header>
        </div>
    )
}


