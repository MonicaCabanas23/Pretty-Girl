import React, {useEffect} from 'react'

const SecondStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(2);
  }, [])

  return (
    <div>SecondStep</div>
  )
}

export default SecondStep