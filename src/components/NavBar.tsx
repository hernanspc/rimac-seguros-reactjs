import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { FaPhoneAlt } from "react-icons/fa";
import './NavBar.scss'; // Importa los estilos SCSS

export function NavBar() {
    return (
        <div className="wrapper_header" >
            <header className="header">
                <img src={logo} alt="Logo" />
                <div className="container_button_title">
                    <h1 className="title_header">¡Compra por este medio!</h1>
                    <a className="wrap_phone" href="tel:+0114116001">
                        <FaPhoneAlt />
                        <h3 className="text_title_button">(01) 411 6001</h3>
                    </a>
                </div>
            </header>
        </div>
    )
}


