import React from 'react'
import './AddProduct.scss'
import ImageUploader from '../../ImageUploader/ImageUploader'
import Form from '../../Form/Form'

const AddProduct = () => {

  const formFields = [{
    'key':'1',
    'element': 'label',
    'clase': 'whole-space',
    'type': 'text',
    'text': 'Nombre',
    'valueInput': 'name',
    'setValue': 'setProductName'
}, {
    'key':'2',
    'element': 'label',
    'clase': 'textarea',
    'type': 'textarea',
    'text': 'Descripción',
    'valueInput': 'password',
    'setValue': 'setPassword'   
}, {
    'key':'3',
    'element': 'label',
    'clase': '',
    'type': 'text',
    'text': 'Precio',
    'valueInput': 'username',
    'setValue': 'setUsername'
}, {
    'key':'4',
    'element': 'label',
    'clase': '',
    'type': 'number',
    'text': 'Stock',
    'valueInput': 'username',
    'setValue': 'setUsername'
}, {
    'key':'5',
    'element': 'label',
    'clase': '',
    'type': 'text',
    'text': 'Categoría',
    'valueInput': 'username',
    'setValue': 'setUsername'
}, {
  'key':'5',
  'element': 'label',
  'clase': '',
  'type': 'text',
  'text': 'Género',
  'valueInput': 'username',
  'setValue': 'setUsername'
}, {
  'key':'5',
  'element': 'label',
  'clase': '',
  'type': 'text',
  'text': 'Talla',
  'valueInput': 'username',
  'setValue': 'setUsername'
}, {
  'key':'5',
  'element': 'label',
  'clase': '',
  'type': 'text',
  'text': 'Color',
  'valueInput': 'username',
  'setValue': 'setUsername'
}, {
  'key':'5',
  'element': 'label',
  'clase': '',
  'type': 'text',
  'text': 'Etiquetas',
  'valueInput': 'username',
  'setValue': 'setUsername'
}]

  return (
    <section className='add-product'>
        <ImageUploader />
        <Form title={'Información de producto'} formType={'add-product'} formFields={formFields} justContinue={false} cancelPath={'/feed'} cancelText={'Cancelar'} continuePath={''} continueText={'Agregar'}/>
    </section>
  )
}

export default AddProduct