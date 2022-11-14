import './ProductDescription.scss';
import React, { useState } from 'react';
import ContainerPD from '../../Components/ContainerPD/ContainerPD';

function ProductDescription() {
  const [name, setName] = useState('');
  const [dui, setDui] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const formFields = [{
    'key': '1',
    'element': 'label',
    'text': 'Nuevo/Exclusivo',
    'use': false,
    'clase': 'TipoProducto'
  },
  {
    'key': '2',
    'element': 'label',
    'text': 'Vestido color azul con mangas',
    'use': false,
    'clase': 'NombreProducto'
  },
  {
    'key': '3',
    'element': 'label',
    'text': 'US$25.00',
    'use': false,
    'clase': 'PrecioProducto'
  },
  {
    'key': '4',
    'element': 'h',
    'type': 'h3',
    'text': 'Descripción del producto:'
  },
  {
    'key': '5',
    'element': 'p',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
            Nulla justo lacus, volutpat eget varius sit amet, lacinia et risus.\
            Sed elementum tellus nunc, in scelerisque nunc rhoncus et.'
  },
  {
    'key': '6',
    'element': 'combobox',
    'name': 'Talla',
    'options': [{value: 'S'}, {value: 'M'}, {value: 'L'}, {value: 'XL'}],
    'clase': 'Talla'
  }
  ]

  return (
    <>
      <ContainerPD title={'Registrarse'} formType={'registro'} formFields={formFields} justContinue={true} continuePath={''} continueText={'Registrarse'} />
    </>
  );
}

export default ProductDescription;
