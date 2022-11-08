import React, {useState} from 'react'
import './CategoryCard.scss'

const CategoryCard = () => {
  /* const [categories, setCategories] = useState([]); */

  return (
    <article className="category-card">
        <figure>
            <img src="./img/accesorios" alt=""/>
            
            <div className="hover-container">
              <div className="hover">
              <p>Text</p>
              </div>
          </div>
        </figure>
    </article>
  )
}

export default CategoryCard