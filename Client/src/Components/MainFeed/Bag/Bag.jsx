import React, { useEffect, useState } from 'react'
import './Bag.scss'
import Button from '../../Button/Button'
import axios from 'axios'
import ProductsBag from '../ProductsBag/ProductsBag'
import Loading from '../../Loading/Loading'

const Bag = () => {
  const [loading, setLoading] = useState(true);
  const [Products, setProducts] = useState([]);
  const [Value, SetValue] = useState(0);
  const [ID, SetID] = useState(0);

  useEffect(() => {
    if (Value != 0) {
      setProducts(Products.map(data => {
        if (data.id == ID) {
          data.amount = parseInt(Value);
        }
        return data;
      }))
      console.log(Products)
    }
  }, [Value, ID]);

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
            let fields = [];
            res.data.map(async (item, index) => {
              await data.data[0].products.map(async (product) => {
                if (item._id === product._id) {
                  SetValue(product.amount)
                  fields.push({
                    id: index + 1,
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
                    amount: product.amount,
                    max: item.amount,
                    SetValue: SetValue,
                    SetID: SetID
                  });
                }
              });
              return 'ok'
            })
            setProducts(fields)
          })
        })
      });
    }
    getData();
  }, []);
  useEffect(() => {
    if (Products.length > 0) setLoading(false);
  }, [Products])

  return (
    <>
      {
        loading ? <Loading /> : <>
          <section className='bag-container'>
            <ProductsBag bag={true} products={Products} />
            <Button clase={'reserve'} text={'Reservar'} onClick={() => { AddReserva(Products) }} />
          </section>
        </>
      }
    </>
  )
}

function AddReserva(Products, Value) {
  console.log(Products)
}

export default Bag