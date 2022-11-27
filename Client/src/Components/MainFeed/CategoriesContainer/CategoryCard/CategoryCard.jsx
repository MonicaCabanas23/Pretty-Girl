import React, { useState } from 'react'
import './CategoryCard.scss'

const CategoryCard = ({ image, name, onClickHandle }) => {
  return (
    <a href="#recommended">
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
    </a>
  )
}

export default CategoryCard