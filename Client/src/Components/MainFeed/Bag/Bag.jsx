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
      await axios.get(url).then(async (res) => {
        const config = {
          headers: {
            'x-token': localStorage.getItem("token")
          }
        };
        await axios.get("/api/bags/" + res.data.uid, config).then(async (data) => {
          url = '/api/bags/products/' + data.data[0]._id
          await axios.get(url, config).then((res) => {
            let fields;
            fields = res.data.map(async (item) => {
              console.log(item._id,product._id)
              const amount = await data.data[0].products.map((product) => { if (item._id === product._id) return product.amount });
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
                amount: amount[0],
                max: item.amount
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