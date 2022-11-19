import React from 'react'
import './AddProduct.scss'
import ImageUploader from '../../ImageUploader/ImageUploader'
import Form from '../../Form/Form'

const AddProduct = () => {
  return (
    <section className='add-product'>
        <ImageUploader />
        <Form />
    </section>
  )
}

export default AddProduct