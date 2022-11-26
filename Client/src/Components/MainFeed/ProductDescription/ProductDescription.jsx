import './ProductDescription.scss';
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { useConfigContext } from '../../../Contexts/ConfigContext';
import Swal from 'sweetalert2'
import moment from 'moment';
import Combobox from '../../Form/ComboBox/ComboBox';
import Label from '../../form/Label/Label';
import Button from '../../Button/Button';
import H from '../../H/H'

let agregando = false;

function ProductDescription({ id }) {

  const [formFields, setFields] = useState([]);
  const [dinamycfields, setDinamycFields] = useState();

  const url = "/api/products/" + id;
  const [encontrado, setEncontrado] = useState(false);
  const [loading, setLoading] = useState(true);
  const context = useConfigContext();

  const [Talla, setTalla] = useState('');
  const [Color, setColor] = useState('');

  const [_talla, _setTalla] = useState('');
  const [_color, _setColor] = useState('');

  const [Datos, setDatos] = useState([]);
  const [combobox, setCombobox] = useState([]);
  const [Descripcion, setDescription] = useState([])
  const [img, setImg] = useState([])
  const [Boton, setButton] = useState([]);

  useEffect(() => {
    const mappedCombobox = formFields.map(field => {
      if (field.element === 'combobox') {
        return (
          <Combobox key={field.key} clase={'combobox'} name={field.name} options={field.options} setOption={field.setOption} />
        )
      }
    });
    setCombobox(mappedCombobox);
  }, [formFields])

  useEffect(() => {

    const getData = async () => {
      setFields([]);
      let { data } = await axios.get(url);

      data.createdAt = (data.createdAt.slice(0, data.createdAt.indexOf('T')));

      const Dia_Actual = new Date().getDate();
      const Mes_Actual = new Date().getMonth();
      const Dia = new Date(data.createdAt).getDate();
      const Mes = new Date(data.createdAt).getMonth();

      const talla = [
        { 'value': 'Selecciona una talla' }
      ]
      talla.push(...data.size.map(t => {
        return { 'value': t }
      }))
      const color = [
        { 'value': 'Selecciona un color' }
      ];
      color.push(...data.color.map(c => {
        return { 'value': c }
      }))
      const formFields = [{
        'key': '1',
        'element': 'label',
        'text': Dia + 7 >= Dia_Actual && Mes_Actual == Mes ? 'Nuevo/Exclusivo' : 'Nuevo',
        'use': false,
        'clase': 'TipoProducto'
      },
      {
        'key': '2',
        'element': 'h3',
        'text': data.name,
        'use': false,
        'clase': 'NombreProducto'
      },
      {
        'key': '3',
        'element': 'label',
        'text': 'US$' + data.price,
        'use': false,
        'clase': 'PrecioProducto'
      },
      {
        'key': '4',
        'element': 'combobox',
        'name': 'Talla',
        'options': talla,
        'clase': 'Talla',
        'setOption': setTalla
      },
      {
        'key': '5',
        'element': 'combobox',
        'name': 'Color',
        'options': color,
        'clase': 'Color',
        'setOption': setColor
      },
      {
        'key': '6',
        'element': 'img',
        'src': data.picture,
        'clase': 'ImagenProducto'

      },
      {
        'key': '7',
        'element': context.isLogged ? 'button' : '',
        'text': 'Agregar a la bolsa',
        'onClick': () => { PushBag(id, Color, Talla) },
        'clase': 'AgregarCarrito'
      },
      ]
      setFields(formFields);
      setEncontrado(true);
    }
    getData();

  }, [id, Color, Talla]);

  useEffect(() => {
    if (formFields.length > 0) {
      console.log(formFields.length);
      setLoading(true)
      const mappedDatos = formFields.map(field => {
        if (field.element === 'label') {
          return (
            <Label key={field.key} text={field.text} InputUse={field.use} clase={field.clase ? field.clase : false} />
          )
        }
      });

      const mapeedButton = formFields.map(btn => {
        if (btn.element === 'button') {
          return (
            <Button key={btn.key} clase={'add-to-bag'} text={btn.text} onClick={btn.onClick} />
          )
        }
      });
      const mapeedimg = formFields.map(img => {
        if (img.element === 'img') {
          return (
            <img key={img.key} src={img.src} />
          )
        }
      })
      const mappedDescription = formFields.map(field => {
        if (field.element[0] === 'h') {
          return (
            <H key={field.key} text={field.text} type={field.element} />
          )
        }
      });

      setDatos(mappedDatos);
      setDescription(mappedDescription)
      setButton(mapeedButton);
      setImg(mapeedimg);
    }
    console.log(loading)
    setLoading(false);
  }, [formFields]);

  return (
    <section className='product-description-container'>
      {
        loading ? <Loading></Loading> : <>
          <div className='container-description'>
            <figure className='form-img'>
              {img}
            </figure>
            <div className='form'>
              <div className='form-datos'>
                {Datos}
              </div>
              <div className='form-description'>
                {Descripcion}
              </div>
              <div className='form-combobox'>
                {combobox}
              </div>
              <div className="actions">
                {Boton}
              </div>
            </div>
          </div>
        </>
      }
      <ProductsContainer title={'Recomendados para ti'} />
    </section>
  );
}
export default ProductDescription;


async function PushBag(id, color, talla) {
  console.log(id, color, talla);
}