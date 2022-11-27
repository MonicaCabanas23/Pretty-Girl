import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SearchModal.scss'

const SearchModal = ({ cancelSearch }) => {

    const url = "/api/categories";
    const [Categorias, setCategorias] = useState();
    const [BusquedaTalla, setBusquedaTalla] = useState(false);
    const [sizeOptions, setSizeOptions] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        let _sizeOptions;
        let i = 0;
        const clothesSizeOptions = [
            { 'value': 'Selecciona una talla' },
            { 'value': 'XS' },
            { 'value': 'S' },
            { 'value': 'M' },
            { 'value': 'L' },
            { 'value': 'XL' }
        ];
        const shoesSizes = [
            { 'value': 'Selecciona una talla' },
            { 'value': '4.0' },
            { 'value': '4.5' },
            { 'value': '5.0' },
            { 'value': '5.5' },
            { 'value': '6.0' },
            { 'value': '6.5' },
            { 'value': '7.0' },
            { 'value': '7.5' },
            { 'value': '8.0' },
            { 'value': '8.5' },
            { 'value': '9.0' },
            { 'value': '9.5' },
            { 'value': '10.0' },
            { 'value': '10.5' },
            { 'value': '11.0' },
            { 'value': '11.5' },
            { 'value': '12.0' },
            { 'value': '12.5' },
            { 'value': '13.0' },
            { 'value': '13.5' },
            { 'value': '14.0' },
        ];
        const jeansSizes = [
            { 'value': 'Selecciona una talla' },
            { 'value': '26' },
            { 'value': '27' },
            { 'value': '28' },
            { 'value': '29' },
            { 'value': '30' },
            { 'value': '31' },
            { 'value': '32' },
            { 'value': '33' },
            { 'value': '34' },
            { 'value': '35' },
            { 'value': '36' },
            { 'value': '37' },
            { 'value': '38' },
            { 'value': '39' },
            { 'value': '40' },
            { 'value': '41' },
            { 'value': '42' },
            { 'value': '43' },
            { 'value': '44' },
        ];

        if (category === 'Bikini' || category === 'Camisas' || category === 'Vestidos' || category === 'Shorts')
            _sizeOptions = clothesSizeOptions
        else if (category === 'Zapatos')
            _sizeOptions = shoesSizes;
        else if (category === 'Pantalones')
            _sizeOptions = jeansSizes;
        else 
            _sizeOptions = [{ 'value': 'Selecciona una talla' }]

        const mappedOptions = _sizeOptions.map( option => {
            i++;
            return (
                <option key={i} value={option.value}>{option.value}</option>
            )
        })

        setSizeOptions(mappedOptions);
        
    }, [category])

    useEffect(() => {
        const getData = async () => {
            let { data } = await axios.get(url);
            const mappedCategorias = (data.categories).map((cat, index) => {
                return <option key={index} value={cat.name}>{cat.name}</option>
            })
            setCategorias(mappedCategorias);
        };
        getData();
    });

    return (
        <div className='modal-container'>
            <section className="search-modal">
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
                            <select name="category" className="select-genre" onChange={(e)=>{
                                setCategory(e.target.value);
                                if(e.target.value !== 'none') setBusquedaTalla(true);
                                else if(e.target.value === 'none') setBusquedaTalla(false);
                                }}>
                                <option value="none">Selecciona una categoría</option>
                                {Categorias}
                            </select>
                        </label>
                        {/* Si no ha seleccionado una categoría entonces no podrá escoger una talla porque este cambia según el tipo de producto */}
                        {BusquedaTalla ? (<label>Talla:
                            <select name="genre" className="select-genre">
                                {sizeOptions}
                            </select>
                        </label>):<></>}
                        <div className="actions">
                            <button name="clean" className="search-modal-filter-clean">Limpiar</button>
                            <button name="filter" className="search-modal-filter">Filtrar</button>
                        </div>
                    </form>
                </div>
                <div className='close' onClick={() => { cancelSearch(false); }}>
                </div>
            </section>
        </div>
    )
}

export default SearchModal