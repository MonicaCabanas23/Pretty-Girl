import React, { useState } from 'react';
import './Label.scss';
import Input from './Input/Input';

function label({type, name, text, valueInput, setValue, InputUse=true, clase=false}) {

    return (
        <div className={clase ? clase : 'formLabel'}>
            <label>{text}</label>
            {InputUse ? <Input type={type} name={name} value={valueInput} handleChange={(e) => { setValue(e.target.value) }} /> : <></>}
        </div >
    );
}

export default label;
