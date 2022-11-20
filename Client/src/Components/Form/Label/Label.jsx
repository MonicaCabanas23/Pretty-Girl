import React, { useState } from 'react';
import './Label.scss';
import Input from './Input/Input';

function label({type, name, text, valueInput, setValue, InputUse=true, clase=false}) {

    return (
        <div className={clase ? clase : 'formLabel'}>
            <label>{text}</label>
            <>
                {
                    InputUse ? <Input type={type} name={name} valueInput={valueInput} handleChange={(e) => { setValue(e.target.value) }} /> : <></>
                }
                {
                    type === 'textarea' ? <textarea rows='4' name={name} value={valueInput} onChange={(e) => { setValue(e.target.value) }}/> : <></>
                }
            </>
        </div >
    );
}

export default label;
