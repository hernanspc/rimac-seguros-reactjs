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
                    <div></div>
                    <div></div>
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
