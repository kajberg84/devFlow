import React from 'react'
import './SignUpPage.css'
import '../SignInPage/SignInPage.css'
import { Button } from '../../components/button/Button'; 
import { useHistory } from 'react-router-dom'
import RoutingPath from "../../routes/RoutingPath";

export const SignUpPage = () => {

    const history = useHistory();
    return (
        <div className="signIn--wrapper">
            <div className="signIn--container">
            <div className="content--wrapper">
                <div className="promptText--wrapper">
                       {/* /* LÖS UTAN BR*/ }
                    <h1>Create Account</h1>
                    <p className="p-large">Do you already have an account?</p>
                    <p className ="blueLinkText" onClick={() => history.push(RoutingPath.signInPage)}>Sign In</p>
                </div>
                <div className="signIn--inputs">
                    <input type="email" className="inputfield" name="email" placeholder="E-mail..." />
                    <input type="password" className="inputfield" name="password" placeholder="Password.." />
                    <input type="confirmPassword" className="inputfield" name="confirmPassword" placeholder="Confirm Password.." />
                </div>
                <Button
                customCssClass="btn-primary signIn--button"
                text="Create Account"
              />
              </div>
            </div>
        </div>
    )
}
