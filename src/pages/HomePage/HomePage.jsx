import React from 'react';
import './HomePage.css';
import startImage from '../../utils/images/startimage.svg';
import { Button } from '../../components/button/Button';

export const HomePage = () => {
    return (
<main className="main-container">
    <div className="main-wrapper">
        <h1>The Productivity tool for developer students.</h1>
        <Button customCssClass="btn-primary signIn--button" text="Pomodoro" />
    </div>
    
    <img src={startImage} alt="Person reading a box while sitting on a box" className="mainImage">
    </img>

</main>
    )
}
