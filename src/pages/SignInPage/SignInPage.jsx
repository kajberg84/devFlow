import React from 'react'
import { useHistory } from 'react-router-dom'
import './SignInPage.css'
import { Button } from '../../components/button/Button';
import RoutingPath from "../../routes/RoutingPath";

export const SignInPage = () => {

    const history = useHistory();

    return (
        <div className="signIn--wrapper">
            <div className="signIn--container">
                <div className="content--wrapper">
                    <div className="promptText--wrapper">
                        {/* /* LÖS UTAN BR*/}
                        <h1 className="signIn--title">Sign in to devFlow.</h1>
                        <p className="p-large">Don't have an account?</p>
                        <p className="p-normal p--link" onClick={() => history.push(RoutingPath.signUpPage)}>Create Account</p>
                    </div>
                    {/* använd iaf state form får du om du vill*/}
                    <form className="form--inputs">
                        <input type="email" className="inputfield" name="email" placeholder="email..." />
                        <input type="password" className="inputfield" name="password" placeholder="password.." />
                    </form>
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