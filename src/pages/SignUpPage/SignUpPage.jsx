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
                    <h1>Register account <br /> devFlow.</h1>
                    <p className="p-large">Already have an account?</p>
                    <button onClick={() => history.push(RoutingPath.signInPage)}>Login</button>
                </div>
                <div className="signIn--inputs">
                    <input type="email" className="inputfield" name="email" placeholder="email..." />
                    <input type="password" className="inputfield" name="password" placeholder="password.." />
                </div>
                <div className="signIn--btn-wrap">
                <a href="#">Forgot password?</a>
                <Button
                customCssClass="btn-primary signIn--button"
                text="Sign In"
              />
              </div>
              </div>
            </div>
        </div>
    )
}
