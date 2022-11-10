import './label.scss';
import React, { useState } from 'react';
import Input from './input/input'

function label({name, text, clase, password, setPassword}) {

    return (
        <div className={clase}>
            <label className="form__label">{text}</label>
            <Input name={text} username={password} onChange={(e) => { setPassword(e.target.value); }} />
        </div >
    );
}

export default label;
