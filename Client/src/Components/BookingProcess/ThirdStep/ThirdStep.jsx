import React, {useEffect} from 'react'
import Form from '../../Form/Form';

const ThirdStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(3);
  }, [])

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={[]} justContinue={false} cancelPath={'/../booking/delivery-method'} continuePath={'/feed'}/>
  )
}

export default ThirdStep