import React, { useEffect, useState } from 'react'
import './Bag.scss'
import Button from '../../Button/Button'
import axios from 'axios'
import ProductsBag from '../ProductsBag/ProductsBag'
import Loading from '../../Loading/Loading'

const Bag = () => {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let url = "/api/auth/validate/" + localStorage.getItem('token');
      await axios.get(url).then((res) => {
        const config = {
          headers: {
            'x-token': localStorage.getItem("token")
          }
        };
        axios.get("/api/bags/" + res.data.uid, config).then((data) => {
          url = '/api/bags/products/' + data.data[0]._id
          axios.get(url, config).then((res) => {
            let fields;
            fields = res.data.map((item) => {
              const amount = data.data[0].products.map((product) => { if (item._id === product._id) return product.amount });
              return {
                available: item.available,
                color: [
                  item.color
                ],
                name: item.name,
                picture: item.picture.secure_url,
                price: item.price,
                size: [
                  item.size
                ],
                amount: amount[0]
              }
            })
            setProducts(fields)
            setLoading(false);
          })
        })
      });
    }
    getData();
  }, []);
  return (
    <>
      {
        loading ? <Loading /> : <>
          <section className='bag-container'>
            <ProductsBag bag={true} products={Products} />
            <Button clase={'reserve'} text={'Reservar'} onClick={() => { AddReserva() }} />
          </section>
        </>
      }
    </>
  )
}

function AddReserva(){
}

export default Bag