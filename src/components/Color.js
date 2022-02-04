import React, { useState, useEffect } from 'react'
import rgbToHex from './Utils.js'

const Color = ({rgb, weight, index, hexColor}) => {

    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hex = rgbToHex(...rgb);
    const hexValue =`#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1500)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <article 
            className={`color ${index > 10 && 'colorLight'}`} 
            style={{background: `rgb(${bcg})`}}
            onClick={() => {setAlert(true)
                navigator.clipboard.writeText(hexValue)            
            }}   
 
        >
            <p className='percentageValue'>%{weight}</p>
            <p className='colorValue'>{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default Color
