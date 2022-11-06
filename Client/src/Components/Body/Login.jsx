import './Login.scss';

function Login() {
    return (
        <div className="login">
            <div className='formulario'>
                <div className="form">
                    <h1>Iniciar sesion</h1>
                    <div className="form__body">
                        <div className="name">
                            <label className="form__label" for="username">Nombre de usuario</label>
                            <input className="form__input" name="username" />
                        </div>
                        <div className="dui">
                            <label className="form__label" for="dui" >Contraseña</label>
                            <input className="form__input" name="dui" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="Iniciar_sesion">Iniciar sesion</button>
                    </div>
                    <a href="#">¿Eres nuevo? Registrate</a>
                    <a href="#">¿Olvidaste tu contraseña?</a>                     
                </div>
            </div>
        </div>
    );
}

export default Login;
