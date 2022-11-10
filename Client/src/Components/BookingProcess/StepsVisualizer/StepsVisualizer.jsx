import React, {useState} from 'react'
/* For icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
/* Import visualizer components */
import Circle from './Circle/Circle'
/* Import styles */
import './StepsVisualizer.scss'

const StepsVisualizer = ({firstActive, secondActive, thirdActive}) => {
    
    return (
        <div className='steps-visualizer'>
            <div className="step first-step">
                <p>Datos del cliente</p>
                {
                    firstActive ? <Circle className='circle' step='1' isActive={true}/> : <Circle className='circle' step='1' isActive={false}/>
                }
            </div>
            <div className="arrow-container">
                <FontAwesomeIcon className="arrow first-arrow" icon={faArrowRight}/>
            </div>
            <div className="step second-step">
                <p>Método de envío</p>
                {
                    secondActive ? <Circle className='circle' step='2' isActive={true}/> : <Circle className='circle' step='2' isActive={false}/>
                }
            </div>
            <div className="arrow-container">
                <FontAwesomeIcon className="arrow second-arrow" icon={faArrowRight} width='10x'/>   
            </div>
            <div className="step third-step">
                <p>Confirmación</p>
                {
                    thirdActive ? <Circle className='circle' step='3' isActive={true}/> : <Circle className='circle' step='3' isActive={false}/>
                }
            </div>  
    </div>
    )
}

export default StepsVisualizer