import React from 'react'
import './SearchModal.scss'

const SearchModal = ({cancelSearch}) => {
  return (
    <section className="search-modal">
        <div className="search-modal-searching-section">
            <div className="search-figure">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className="search" type="text" placeholder="Tu búsqueda aquí"/>
            </div>
            {/* Close the modal */}
            <button onClick={() => {cancelSearch(false);}}>Cancelar</button>
        </div>
        <div className="search-modal-filters">
            <h3>Búsqueda por filtros</h3>
            <form className="form-filters">
                <label>Género:
                    <select name="genre" className="select-genre">
                        <option value="none">Selecciona tu género</option>
                        <option value="woman">Mujer</option>
                        <option value="man">Hombre</option>
                    </select>
                </label>
                <label>Color:
                    <select name="genre" className="select-genre">
                        <option value="none">Selecciona un color</option>
                        <option value="red">Rojo</option>
                        <option value="green">Verde</option>
                        <option value="blue">Azul</option>
                        <option value="magenta">Magenta</option>
                        <option value="yellow">Amarillo</option>
                        <option value="cyan">cyan</option>
                    </select>
                </label>
                {/* Puede dejar sin seleccionar la categoría */}
                <label>Categoría:
                    <select name="genre" className="select-genre">
                        <option value="none">Selecciona una categoría</option>
                        <option value="t-shirt">Camimsas</option>
                        <option value="dresses">Vestidos</option>
                        <option value="bikinis">Bikinis</option>
                        <option value="underpants">Calzonetas</option>
                        <option value="sunglasses">Gafas</option>
                        <option value="shoes">Zapatos</option>
                        <option value="accessories">Accesorios</option>
                        <option value="Bags">Carteras</option>
                    </select>
                </label>
                {/* Si no ha seleccionado una categoría entonces no podrá escoger una talla porque este cambia según el tipo de producto */}
                <label>Talla:
                    <select name="genre" className="select-genre">
                        <option value="none">Selecciona una talla</option>
                        <option value="XS">XS</option>
                        <option value="X">X</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </label>
                <div className="actions">
                    <button name="clean" className="search-modal-filter-clean">Limpiar</button>
                    <button  name="filter" className="search-modal-filter">Filtrar</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default SearchModal