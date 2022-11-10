import './input.scss';
import React, {useState} from 'react'

function Login({name, username, onChange}) {

    return (
        <input className="form__input" name={name} value={username} onChange={onChange} />
    );
}

export default Login;
