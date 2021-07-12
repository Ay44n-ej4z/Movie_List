import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import "./SignIn.css"

function SignIn() {
    return (
        <div className = "SignIn">
            <div className = "input">
            <Input style = {{color: "white"}}></Input>
            </div>
            <div className = "input_sec">
            <Input style = {{color: "white"}} ></Input>
            </div>
            <div className = "btn">
            <Button style = {{color: "white"}} >Sign In</Button>
            </div>
        </div>
    )
}

export default SignIn
