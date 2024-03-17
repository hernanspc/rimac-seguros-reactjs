import React from 'react'
import blurasset from '../assets/img/blur-asset.png';
import blurasset1 from '../assets/img/blur-asset1.png';
import blurassetleft from '../assets/img/blur-asset-left.png';
import blurassetleft2 from '../assets/img/blur-asset-left2.png';

import './MainContent.scss';

const MainContent = () => {
    return (
        <section className="section" >
            <img className="blurasset" src={blurasset} ></img>
            <img className="blurasset1" src={blurasset1} ></img>
            <img className="blurassetleft" src={blurassetleft} ></img>
            <img className="blurassetleft2" src={blurassetleft2} ></img>
        </section>
    )
}

export default MainContent
