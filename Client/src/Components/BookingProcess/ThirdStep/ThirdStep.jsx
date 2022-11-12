import React, {useEffect} from 'react'

const ThirdStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(3);
  }, [])

  return (
    <div>ThirdStep</div>
  )
}

export default ThirdStep