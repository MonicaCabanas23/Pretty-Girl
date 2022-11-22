import React, { useEffect, useState } from 'react'
import './AddProduct.scss'
import ImageUploader from '../../ImageUploader/ImageUploader'
import Form from '../../Form/Form'
import axios from 'axios'
import Loading from '../../Loading/Loading'

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
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
    { 'value': 'Selecciona un género' },
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
    if (category.substring(0,10) === 'Selecciona'){
      setCategory('');
    }
    if (genre.substring(0,10) === 'Selecciona'){
      setGenre('');
    }

    const _colors = colors;
    const _sizes = sizes;
    _colors.push(color);
    _sizes.push(size);

    setColors(_colors);
    setSizes(_sizes);


    const product_ = {
      'name': name,
      'category': category,
      'size': size,
      'color': color,
      'gender': genre,
      'available': true,
      'amount': quantity,
      'price': price,
    }

    console.log(product_);



  }, [name, price, quantity, category, genre, size, color])

  useEffect(() => {
    const categoryOptions = [
      { 'value': 'Selecciona una categoría' }
    ];

    const getCategories = async () => {
      await axios.get(url).then(data => {
        data=data.data;
        for (let i = 0; i < data.total; i++) {
          const option = { 'value': data.categories[i].name };
          categoryOptions.push(option);
        }
        setCategories(categoryOptions.length>1? categoryOptions:[{ 'value': 'Seleciona una categoría' }]);
      }).
      catch(error=>console.log(error))

    }

    getCategories();

  }, [])

  useEffect(() => {
    const fields = [{
      'key': '1',
      'element': 'label',
      'clase': 'whole-space',
      'type': 'text',
      'text': 'Nombre',
      
      'setValue': setName
    }, {
      'key': '2',
      'element': 'label',
      'clase': '',
      'type': 'text',
      'text': 'Precio',
      'setValue': setPrice
    }, {
      'key': '3',
      'element': 'label',
      'clase': '',
      'type': 'number',
      'text': 'Stock',
      'setValue': setQuantity
    }, {
      'key': '4',
      'element': 'combobox',
      'clase': 'combobox',
      'type': 'combobox',
      'text': 'Categoría',
      'setValue': setCategory,
      'options': categories
    }, {
      'key': '5',
      'element': 'combobox',
      'clase': 'combobox',
      'type': 'text',
      'text': 'Género',
      'setValue': setGenre,
      'options': genreOptions
    }, {
      'key': '6',
      'element': 'combobox',
      'clase': 'combobox',
      'type': 'text',
      'text': 'Talla',
      
      'setValue': setSize,
      'options': sizeOptions
    }, {
      'key': '7',
      'element': 'combobox',
      'clase': 'combobox',
      'type': 'text',
      'text': 'Color',
      'setValue': setColor,
      'options': colorOptions
    },
    {
      'key': '8',
      'element': 'label',
      'clase': 'textarea',
      'type': 'textarea',
      'text': 'Tallas',
      'value': color,
      'setValue': setColor,
      'options': colorOptions
    }, 
    {
      'key': '9',
      'element': 'label',
      'clase': 'textarea',
      'type': 'textarea',
      'text': 'Colores',
      'value': color,
      'setValue': setColor,
      'options': colorOptions
    }]
    setFormFields(fields);
  }, [categories])

  useEffect(() => {
    setLoading((formFields.length>0 & categories.length>0)?false:true);
  }, [formFields])

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