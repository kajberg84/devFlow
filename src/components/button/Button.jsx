import React from 'react'
import { useHistory } from 'react-router-dom'
import './Button.css'

export const Button = (props) => {
    const history = useHistory();
    const customCssClasses = props.customCssClass + " btn"

    return (
        <>
            <button className={customCssClasses} onClick={() => history.push(props.targetPage)}>{props.text}</button>
        </>
    )
}
