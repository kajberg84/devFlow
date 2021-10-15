import React from 'react'
import './Button.css'

export const Button = (props) => {

    const customCssClasses = props.custom + " btn"

    return (
        <>
            <button className={customCssClasses}>{props.text}</button>
        </>
    )
}
