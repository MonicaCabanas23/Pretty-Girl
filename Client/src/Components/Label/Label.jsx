import React, { useState } from 'react';
import './Label.scss';
import Input from './Input/Input';

function label({type, name, text, valueInput, setValue}) {

    return (
        <div className='formLabel'>
            <label>{text}</label>
            <Input type={type} name={name} valueInput={valueInput} handleChange={(e) => { setValue(e.target.value); }} />
        </div >
    );
}

export default label;
