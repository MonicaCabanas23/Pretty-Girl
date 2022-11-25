import React, { useEffect, useLayoutEffect, useState } from 'react'
import './AddProduct.scss'
import ImageUploader from '../../ImageUploader/ImageUploader'
import Button from '../../Button/Button'
import Label from '../../Form/Label/Label'
import Combobox from '../../Form/ComboBox/ComboBox';
import { Link } from "react-router-dom";

import axios from 'axios'
import Loading from '../../Loading/Loading'

const AddProduct = () => {
  // Input variables
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');
  const [categories, setCategories] = useState([]);
  // Colors and Sizes to save in the database
  const [size, setSize] = useState('none');
  const [color, setColor] = useState('none');
  // Image
  const [images, setImages] = useState([]);
  // Form fields
  const [formFields, setFormFields] = useState([]);
  const [detailsFields, setDetailsFields] = useState([]);
  // Auxiliar variables for color and sizes
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [_color, _setColor] = useState(true);
  const [_size, _setSize] = useState(true);
  
  const [loading, setLoading] = useState(true);
  const url = "/api/categories/";

  // Combobox options
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

  const handleSubmit = () => {
    const url = "/api/products";
    const token = localStorage.getItem('token');
    
    // Header variables configuration
    const config = {
      headers: { "x-token": token }
    };

    const body = {
      'name': name,
      'category': category,
      'size': sizes,
      'color': colors,
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

  // For getting categories from the API
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


  // For Fields rendering just when categories are loaded
  useEffect(() => {
    const fields = [{
      'key': '1',
      'element': 'label',
      'clase': 'whole-space',
      'type': 'text',
      'text': 'Nombre',
      'setValue': setName,  
    }, {
      'key': '2',
      'element': 'label',
      'clase': '',
      'type': 'text',
      'text': 'Precio',
      'setValue': setPrice,
    }, {
      'key': '3',
      'element': 'label',
      'clase': '',
      'type': 'number',
      'text': 'Stock',
      'setValue': setQuantity,
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
    }]

    const mappedForm = fields.map((field) => {
      if (field.element === 'label') {
          return (
              <Label key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue} InputUse={field.use} clase={field.clase ? field.clase : false}/>
          )
      }
      if (field.element === 'combobox') {
          return (
              <Combobox key={field.key} clase={field.clase} name={field.name} options={field.options} setOption={field.setValue}/>
          )
      }
    });

    setLoading(true)
    setFormFields(mappedForm);
  }, [categories])

  // For updating textareas and comoboxes of size and color
  useEffect(()=> {
    handleSizeChange();
    handleColorChange();
  }, [_size, _color])

  const handleColorChange = () => {
    if (!_color) setColor('none');
    if (_color) {
      const _colors = colors;
      const initColor = _colors.findIndex(item => color == item);
      if (initColor != -1) _colors.splice(initColor, 1);
      if (initColor == -1 && color !== 'none' && color !== 'Selecciona un color') _colors.push(color);
      setColors(_colors);
      _setColor(false);
    }
  }

  const handleSizeChange = () => {
    if (!_size) setSize('none');
    if (_size) {
      const _sizes = sizes;
      const initSize = _sizes.findIndex(item => size == item);
      if (initSize != -1) _sizes.splice(initSize, 1);
      if (initSize == -1 && size !== 'none' && size !== 'Selecciona una talla') _sizes.push(size);
      setSizes(_sizes);
      _setSize(false);
    }
  }

  useEffect(() => {

    if (color !== 'none' && color !== 'Selecciona un color') {
      _setColor(true);
      _setSize(false);
    }
    if (size !== 'none' && size !== 'Selecciona un talla') {
      _setSize(true);
      _setColor(false);
    }

    const details = [
      {
        'key': '6',
        'element': 'combobox',
        'clase': 'combobox',
        'name': 'reusable',
        'type': 'text',
        'text': 'Talla',
        'setValue': setSize,
        'options': sizeOptions
      }, {
        'key': '7',
        'element': 'combobox',
        'clase': 'combobox',
        'name': 'reusable',
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
      }
    ]

    const mappedDetails = details.map((field) => {
      if (field.element === 'label') {
          return (
              <Label key={field.key} type={field.type} text={field.text} valueInput={field.value} setValue={field.setValue} InputUse={field.use} clase={field.clase ? field.clase : false}/>
          )
      }
      if (field.element === 'combobox') {
          return (
              <Combobox key={field.key} clase={field.clase} name={field.name} options={field.options} setOption={field.setValue}/>
          )
      }
    });

    setDetailsFields(mappedDetails);
  }, [size, color])


  useEffect(() => {
    setLoading((formFields.length > 0 && categories.length > 0) ? false : true);
  }, [formFields])

  return (
    <>
      {
        loading ? <Loading></Loading> :
          <>
            <section className='add-product'>
              <ImageUploader images={images} setImages={setImages}/>
              <div className='form-container'>
                <form className='add-product'>
                    <h1>Información de producto</h1>
                    <div className="formFields">
                      {formFields}
                      {detailsFields}
                    </div>
                    <div className="actions">
                        <Link ><Button clase='continue' onClick={(e) => handleSubmit(e)} text={'Agregar'} /></Link>
                        <Link to={'/feed'}><Button clase='cancel' text={'Cancelar'} /></Link>
                    </div>
                </form>
            </div>
            </section>
          </>
      }
    </>
  )
}

export default AddProduct