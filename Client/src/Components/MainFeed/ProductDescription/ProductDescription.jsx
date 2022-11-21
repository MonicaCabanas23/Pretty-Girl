import './ProductDescription.scss';
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import { useConfigContext } from '../../../Contexts/ConfigContext';
const ContainerPD = React.lazy(() => import('./ContainerPD/ContainerPD'));

function ProductDescription({ id }) {

  const [fields, setFields] = useState();
  const url = "/api/products/" + id;
  const [encontrado, setEncontrado] = useState(false);
  const [loading, setLoading] = useState(true);
  const context = useConfigContext();
  useEffect(() => {

    setLoading(true)
    const getData = async () => {
      let { data } = await axios.get(url);

      data.createdAt = (data.createdAt.slice(0, data.createdAt.indexOf('T')));

      const Dia_Actual = new Date().getDate();
      const Mes_Actual = new Date().getMonth();
      const Dia = new Date(data.createdAt).getDate();
      const Mes = new Date(data.createdAt).getMonth();

      const talla = (data.size).map(item => {
        return { value: item }
      });
      const color = (data.color).map(item => {
        return { value: item }
      });


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
        'clase': 'Talla'
      },
      {
        'key': '5',
        'element': 'combobox',
        'name': 'Color',
        'options': color,
        'clase': 'Color'
      },
      {
        'key': '6',
        'element': 'img',
        'src': data.picture.secure_url,
        'clase': 'ImagenProducto'

      },
      {
        'key': '7',
        'element': context.isLogged ? 'button' : '',
        'text': 'Agregar a la bolsa',
        'onClick': () => { console.log('Agregar al la bolsa') },
        'clase': 'AgregarCarrito'
      },
      ]
      setFields(formFields);
      setEncontrado(true);
      setLoading(false)
        
    }
    getData();
      console.log(loading)

  }, [id])

  return (
    <section className='product-description-container'>
      <Suspense fallback={<Loading></Loading>} >
        {
          loading ? <Loading></Loading> :
            <>
              {encontrado ? <><ContainerPD title={'Registrarse'} formType={'registro'} formFields={fields} justContinue={true} continuePath={''} RevervarPatch={"/product/" + id} CrearRevervarPatch={"/product/#" + id} continueText={'Registrarse'} /> </> : <Loading></Loading>}
            </>
        }
      </Suspense>
      <ProductsContainer title={'Recomendados para ti'} />
    </section>
  );
}
export default ProductDescription;
