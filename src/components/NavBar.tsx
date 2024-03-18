import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { FaPhoneAlt } from "react-icons/fa";
import './NavBar.scss'; // Importa los estilos SCSS

export function NavBar() {
    return (
        <header className="header_login">
            <div className="header">
                <nav className="container">

                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="header_right">
                        <button type='button'>
                            ¡Compra por este medio!
                        </button>

                        <a className="wrap_phone" href="tel:+0114116001">
                            <FaPhoneAlt />
                            <div className="text_title_button">(01) 411 6001</div>
                        </a>
                    </div>

                </nav>
            </div>
        </header>
    )
}


