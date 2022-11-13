import React, {useEffect} from 'react'
import Form from '../../Form/Form';

const SecondStep = ({onLoad}) => {
  useEffect(() => {
    onLoad(2);
  }, [])

  return (
    <Form title={'Método de envío y reserva'} formType={'description'} formFields={[]} justContinue={false} cancelPath={'/../booking/client-data'} continuePath={'/../booking/confirmation'}/>
  )
}

export default SecondStep