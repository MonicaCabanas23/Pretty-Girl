import React, { useEffect, useState } from 'react'
import './Bag.scss'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import Button from '../../Button/Button'
import axios from 'axios'

const Bag = () => {
  const [Loading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let url = "/api/auth/validate/"+localStorage.getItem('token');
      await axios.get(url).then((res) => {
        const config = {
          headers: {
            'x-token': localStorage.getItem("token")
          }
        };
        console.log(res.data)
        axios.get("/api/bags/"+res.data.uid, config).then((res) => {
          url = '/api/bags/products/'+res.data[0]._id
          axios.get(url, config).then((res) => {
            console.log(res.data);
          })
        })
      });
    }
    getData();
  });
  return (
    <section className='bag-container'>
        <ProductsContainer bag={true}/>
        <Button clase={'reserve'} text={'Reservar'}/>
    </section>
  )
}

export default Bag