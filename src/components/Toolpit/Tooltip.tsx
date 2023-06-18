//@ts-ignore
import style from './Toolptip.module.scss'

import React, { useState } from 'react';

// @ts-ignore
export const Tooltip = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={style["tooltip-container"]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isHovered && <div className={style.tooltip}>{text}</div>}

        </div>
    );
};

