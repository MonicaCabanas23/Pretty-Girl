import React, { useState } from 'react'
import Button from '../../../Button/Button';
import './ProductCardBag.scss';
import Delete from '../../../../assets/img/delete.svg';

const ProductCardBag = ({ product }) => {
  console.log(product)
  const [valor, setValor] = useState(product.amount);
  return (
    <article className={"product-card "}>
      <Button clase={'delete'} onClick={() => {
        console.log('delete');
      }} text={
        <>
          <figure className='delete'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.8 19.7q-.625 0-1.062-.438Q6.3 18.825 6.3 18.2V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v12.2q0 .65-.425 1.075-.425.425-1.075.425ZM17 6H7v12.2q0 .35.225.575Q7.45 19 7.8 19h8.4q.3 0 .55-.25.25-.25.25-.55Zm-6.95 11h.7V8h-.7Zm3.2 0h.7V8h-.7ZM7 6V19 18.2Z" /></svg>
          </figure>
        </>
      } ></Button>
      <figure>
        <img src={product.picture} alt="" />
      </figure>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <p className='product-amount'>Cantidad: <input type='number' name={'cantidad'} value={valor} min={1} max={product.max} onChange={(e) => {
        setValor(e.target.value);
        product.amount = e.target.value;
      }} ></input> </p>
    </article>
  )
}

export default ProductCardBag