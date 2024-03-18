import React from 'react'
import portadalogin from '../assets/img/portada-login.png'
import blurasset from '../assets/img/blur-asset.png';
import blurasset1 from '../assets/img/blur-asset1.png';
import blurassetleft from '../assets/img/blur-asset-left.png';
import blurassetleft2 from '../assets/img/blur-asset-left2.png';

import './MainContent.scss';

const MainContent = () => {
    return (
        <section className="login">

            <div className="container">
                <div className="login_left">
                    <img src={portadalogin} alt="portada rimac"></img>
                </div>
                <div className="login_right">
                    <div className="login_right_mobile">

                        <div>
                            <div className="tag_promo">Seguro Salud Flexible</div>
                            <div className="info">
                                <h1 className="info_title">Creado para ti y tu familia</h1>
                                <h2 className="info_subtitle">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</h2>
                            </div>
                        </div>

                        <div className="portada_mobile">
                            <img src={portadalogin} alt="portada rimac"></img>
                        </div>

                    </div>
                    <div className="login_middle"></div>
                    <form action=""></form>
                </div>
            </div>

            <div>
                <img className="blurasset" src={blurasset} ></img>
                <img className="blurasset1" src={blurasset1} ></img>
                <img className="blurassetleft" src={blurassetleft} ></img>
                <img className="blurassetleft2" src={blurassetleft2} ></img>
            </div>

        </section>
    )
}

export default MainContent
