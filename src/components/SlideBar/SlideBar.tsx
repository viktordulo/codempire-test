import React from 'react';

import style from './SlideBar.module.css'
import '../../fonts.css'

const SlideBar: React.FC = () => {
    return (
        <div className = {style.wrapper}>
            <div className={style.time}>
                <p>17:57</p>
            </div>
            <div className={style.widgets}>
                <div className={style.signal}></div>
                <p>3G</p>
                <div className={style.energy}></div>
            </div>

        </div>
    );
}

export default SlideBar;