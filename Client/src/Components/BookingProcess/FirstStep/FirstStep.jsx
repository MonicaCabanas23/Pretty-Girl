import React, {useEffect} from 'react'

const FirstStep = ({onLoad}) => {
    useEffect(() => {
        onLoad(1);
    }, [])
    
    return (
        <div>
            FirstStep
        </div>
    )
}

export default FirstStep