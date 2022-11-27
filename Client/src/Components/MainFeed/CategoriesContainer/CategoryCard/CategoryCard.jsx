import React, { useState } from 'react'
import './CategoryCard.scss'
import { useConfigContext } from '../../../../Contexts/ConfigContext'
import { Link } from 'react-scroll'

const CategoryCard = ({ image, name, onClickHandle }) => {
  const loggedContext = useConfigContext();

  return (
    <>
      {
        loggedContext.isLogged  ?
        <Link to='recommended' smooth={true} offset={-100} duration={1000}>
          <article className="category-card" onClick={onClickHandle}>
            <figure>
              <img src={image} alt="" />

              <div className="hover-container">
                <div className="hover">
                  <p>{name}</p>
                </div>
              </div>
            </figure>
          </article>
        </Link> : 
        <Link to='arrived' smooth={true} offset={-100} duration={1000}>
          <article className="category-card" onClick={onClickHandle}>
            <figure>
              <img src={image} alt="" />

              <div className="hover-container">
                <div className="hover">
                  <p>{name}</p>
                </div>
              </div>
            </figure>
          </article>
        </Link>
      }
    </>
  )
}

export default CategoryCard