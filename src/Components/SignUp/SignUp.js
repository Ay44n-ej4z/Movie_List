import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import "./SignUp.css";

function SignUp() {
    return (
        <div className = "SignUp">
            <div className = "inputSignUp">
            <Input style = {{color: "white"}}></Input>
            </div>
            <div className = "input_SignUp">
            <Input style = {{color: "white"}} ></Input>
            </div>
            <div className = "btn_signUp">
            <Button style = {{color: "white"}} >Sign Up</Button>
            </div>
        </div>
    )
}

export default SignUp
