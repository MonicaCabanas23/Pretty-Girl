import React from 'react'
import './Loading.scss'

/* A form can have different types in this app: login, register, client-data, delivery-info, description*/
/* cancelHandle y continueHandle son parámetros para funciones en caso de que se de click en esos bootones */
const Loading = () => {
    
    return (
        <div className='loading-container'>
            <div className='loading-form'>
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loading;