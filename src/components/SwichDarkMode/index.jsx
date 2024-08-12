import React, { useState, useEffect } from 'react';
import './styles.css';

export function SwitchDarkMode() {

    const [isDarkModeOn, SetDarkMode]

    useState(() => {
        if (isDarkModeOn)
    } )

    // useEffect(() => {
    //     if (isDarkModeOn) {
    //         document.body.classList.add('dark-mode')
    //     } else {
    //         document.body.classList.remove('dark-mode')
    //     }
    // }, [isDarkModeOn])
    
    return (
        <>
            <button onClick={() => SetDarkMode(!isDarkModeOn)}>
                {isDarkModeOn ? 'Light-Mode' : 'Dark-Mode'}
            </button>
        </>
    )
}

