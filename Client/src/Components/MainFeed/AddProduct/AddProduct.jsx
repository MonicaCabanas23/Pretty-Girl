import React, { useEffect, useState } from 'react'
import './AddProduct.scss'
import ImageUploader from '../../ImageUploader/ImageUploader'
import Form from '../../Form/Form'
import axios from 'axios'
import Loading from '../../Loading/Loading'

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formFields, setFormFields] = useState([])

  const url = "/api/categories/";

  const sizeOptions = [
    { 'value': 'Selecciona una talla' },
    { 'value': 'XS' },
    { 'value': 'S' },
    { 'value': 'M' },
    { 'value': 'L' },
    { 'value': 'XL' }
  ];
  const genreOptions = [
    { 'value': 'Seleciona un género' },
    { 'value': 'Masculino' },
    { 'value': 'Femenino' },
    { 'value': 'Unisex' },
  ];
  const colorOptions = [
    { 'value': 'Selecciona un color' },
    { 'value': 'Azul' },
    { 'value': 'Amarillo' },
    { 'value': 'Rojo' },
  ];

  useEffect(() => {
    const categoryOptions = [
      { 'value': 'Seleciona una categoría' }
    ];

    const getCategories = async () => {
      let { data } = await axios.get(url);

      for (let i = 0; i < data.total; i++) {
        const option = { 'value': data.categories[i].name };
        categoryOptions.push(option);
      }
      setCategories(categoryOptions);
      setLoading(false);
      const fields = [{
        'key': '1',
        'element': 'label',
        'clase': 'whole-space',
        'type': 'text',
        'text': 'Nombre',
        'valueInput': name,
        'setValue': setName
      }, {
        'key': '2',
        'element': 'label',
        'clase': '',
        'type': 'text',
        'text': 'Precio',
        'valueInput': price,
        'setValue': setPrice
      }, {
        'key': '3',
        'element': 'label',
        'clase': '',
        'type': 'number',
        'text': 'Stock',
        'valueInput': quantity,
        'setValue': setQuantity
      }, {
        'key': '4',
        'element': 'combobox',
        'clase': 'combobox',
        'type': 'combobox',
        'text': 'Categoría',
        'valueInput': category,
        'setValue': setCategory,
        'options': categories
      }, {
        'key': '5',
        'element': 'combobox',
        'clase': 'combobox',
        'type': 'text',
        'text': 'Género',
        'valueInput': genre,
        'setValue': setGenre,
        'options': genreOptions
      }, {
        'key': '6',
        'element': 'combobox',
        'clase': 'combobox',
        'type': 'text',
        'text': 'Talla',
        'valueInput': size,
        'setValue': setSize,
        'options': sizeOptions
      }, {
        'key': '7',
        'element': 'combobox',
        'clase': 'combobox',
        'type': 'text',
        'text': 'Color',
        'valueInput': color,
        'setValue': setColor,
        'options': colorOptions
      }]
      setFormFields(fields);
    }

    getCategories();

  }, [])

  useEffect(() => {
    console.log(categories);
  }, [categories])

  return (
    <>
      {
        loading ? <Loading></Loading> :
          <>
            <section className='add-product'>
              <ImageUploader />
              <Form title={'Información de producto'} formType={'add-product'} formFields={formFields} justContinue={false} cancelPath={'/feed'} cancelText={'Cancelar'} continuePath={''} continueText={'Agregar'} />
            </section>
          </>
      }
    </>
  )
}

export default AddProduct