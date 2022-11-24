import React, { useEffect, useLayoutEffect, useState } from 'react'
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
  const [size, setSize] = useState('none');
  const [color, setColor] = useState('none');
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formFields, setFormFields] = useState([])
  const [_color, _setColor] = useState(true);
  const [_size, _setSize] = useState(true);

  const handleSubmit = () => {
    const url = "/api/products";
    const token = localStorage.getItem('token');

    // Test variables
    const sized = ["L", "M"];
    const colored = ["Gris"];
    
    // Header variables configuration
    const config = {
      headers: { "x-token": token }
    };

    const body = {
      'name': name,
      'category': category,
      'size': sized,
      'color': colored,
      'gender': genre,
      'available': true,
      'amount': quantity,
      'price': price,
    };
    console.log(body);
    
    axios.post(url, body, config)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (color !== 'none' && color !== 'Selecciona un color') {
      _setColor(true);
      _setSize(false);
    }
  }, [color])
  useEffect(() => {
    if (size !== 'none' && size !== 'Selecciona un talla') {
      _setSize(true);
      _setColor(false);
    }
  }, [size])

  useEffect(() => {
    if (!_size) setSize('none');
  }, [_size])
  useEffect(() => {
    if (!_color) setColor('none');
  }, [_color])

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
    if (category.substring(0, 10) === 'Selecciona') {
      setCategory('');
    }
    if (genre.substring(0, 10) === 'Selecciona') {
      setGenre('');
    }

    if (_color) {
      const _colors = colors;
      const initColor = _colors.findIndex(item => color == item);
      if (initColor != -1) _colors.splice(initColor, 1);
      if (initColor == -1 && color !== 'none' && color !== 'Selecciona un color') _colors.push(color);
      setColors(_colors);
      _setColor(false);
    }
    if (_size) {
      const _sizes = sizes;
      const initSize = _sizes.findIndex(item => size == item);
      if (initSize != -1) _sizes.splice(initSize, 1);
      if (initSize == -1 && size !== 'none' && size !== 'Selecciona una talla') _sizes.push(size);
      setSizes(_sizes);
      _setSize(false);
    }
  }, [name, price, quantity, category, genre, _size, _color])

  useEffect(() => {
    const categoryOptions = [
      { 'value': 'Selecciona una categoría' }
    ];

    const getCategories = async () => {
      await axios.get(url).then(data => {
        data = data.data;
        for (let i = 0; i < data.total; i++) {
          const option = { 'value': data.categories[i].name };
          categoryOptions.push(option);
        }
        setCategories(categoryOptions.length > 1 ? categoryOptions : [{ 'value': 'Seleciona una categoría' }]);
      }).
        catch(error => console.log(error))
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
      'value': sizes
    },
    {
      'key': '9',
      'element': 'label',
      'clase': 'textarea',
      'type': 'textarea',
      'text': 'Colores',
      'value': colors
    }]
    setLoading(true)
    setFormFields(fields);
  }, [categories, color, size])

  useEffect(() => {
    setLoading((formFields.length > 0 & categories.length > 0) ? false : true);
  }, [formFields])

  return (
    <>
      {
        loading ? <Loading></Loading> :
          <>
            <section className='add-product'>
              <ImageUploader />
              <Form title={'Información de producto'} formType={'add-product'} formFields={formFields} justContinue={false} cancelPath={'/feed'} cancelText={'Cancelar'} continuePath={''} continueText={'Agregar'} continueHandle={(e) => handleSubmit(e)} />
            </section>
          </>
      }
    </>
  )
}

export default AddProduct