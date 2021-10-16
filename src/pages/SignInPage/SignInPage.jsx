import React from 'react'
import './SignInPage.css'
import { Button } from '../../components/button/Button'; 
export const SignInPage = (props) => {
    return (
        <div className="signIn--wrapper">
            <div className="signIn--container">
            <div className="content--wrapper">
                <div className="promptText--wrapper">
                    <h1>Sign in to <br /> devFlow.</h1>
                    <p className="p-large">Don't have an account?</p>
                    <a href="#">Create Account</a>
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