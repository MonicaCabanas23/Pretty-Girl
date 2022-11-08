import React from 'react'
import './ProductDescriptionContainer.scss'
import HeaderAfterLogin from '../../Header/HeaderNoLogin/HeaderNoLogin'

const ProductDescriptionContainer = () => {
  return (
    <div>
        <HeaderNoLogin />
        {/* Si ha iniciado sesión se debe de mostrar el HeaderAfterLogin */}
        <section>
            <figure className='productImage'>
                <img src="./" alt="Product name" />
            </figure>
            <article className='productDescription'>
                <p className='status'>Nuevo / exlusivo</p>
                <div className='generalDescription'>
                    <h3 className='productName'>Vestido color azul con mangas</h3>
                    <h3 className="price">$25.00</h3>
                </div>
                <p className='title'>Descripción del producto:</p>
                <p className='descriptionParagraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla justo lacus, volutpat eget varius sit amet, lacinia et risus. 
                    Sed elementum tellus nunc, in scelerisque nunc rhoncus et.
                </p>
                <div className="filters">
                    <select name="size" className="size">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <select name="size" className="size">
                        <option value="color-arbitrario">color arbitrario</option>
                        <option value="color-arbitrario">color arbitrario</option>
                        <option value="color-arbitrario">color arbitrario</option>
                        <option value="color-arbitrario">color arbitrario</option>
                        <option value="color-arbitrario">color arbitrario</option>
                    </select>
                </div>
                {/* Crear un componente del tipo button para poder cambiarlo dinámicamente */}
                <button>Añadir a la bolsa</button>
            </article>
        </section>
    </div>
  )
}

export default ProductDescriptionContainer