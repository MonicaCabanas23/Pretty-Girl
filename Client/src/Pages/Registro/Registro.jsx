import './Registro.scss';
import React, { useState } from 'react';
import Label from '../../Components/ComponentesLoginRegistro/label'
import Button from '../../Components/ComponentesLoginRegistro/Button/Button';

function Registro() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    return (
        <div className="registro">
            <div className='formulario'>
                <div className="form">
                    <h1>Registro</h1>
                    <div className="form__body">
                        <Label name={'Nombre'} type={"text"} text={'Nombre: '} clase={'input'} password={name} setPassword={setName} />
                        <Label name={'Dui'} type={"text"} text={'Dui: '} clase={'input'} password={dui} setPassword={setDui} />
                        <Label name={'Correo'} type={"email"} text={'Correo  electronico: '} clase={'input'} password={correo} setPassword={setCorreo} />
                        <Label name={'Telefono'} type={"text"} text={'Numero de telefono: '} clase={'input'} password={telefono} setPassword={setTelefono} />
                        <Label name={'Direccion'} type={"text"} text={'Direccion: '} clase={'input direccion'} password={direccion} setPassword={setDireccion} />
                    </div>
                    <div className="buttons">
                        <Button clase={"Registrarse"} onClick={() => { console.log(name); console.log(dui); }} text={"Registrarse"} />
                    </div>
                    <a href="#">¿Ya tienes una cuenta? Inicia sesión</a>
                </div>
            </div>
        </div>
    );
}

export default Registro;
