import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchModal.scss'

const SearchModal = ({ cancelSearch }) => {
    const categoriesUrl = "/api/categories";
    let url = "/api/products?";
    let filterFlag = false;
    const navigate = useNavigate();

    // Set categories from API
    const [Categories, setCategories] = useState();

    // Set combo box values
    const [sizeOptions, setSizeOptions] = useState([]);
    const [category, setCategory] = useState('');
    const [AllowSize, setAllowSize] = useState(false);

    // Set search filters
    const [GenderSearch, setGenderSearch] = useState(false);
    const [ColorSearch, setColorSearch] = useState(false);
    const [CategorySearch, setCategorySearch] = useState(false);
    const [SizeSearch, setSizeSearch] = useState(false);

    // Button states
    const [FilterButton, setFilterButton] = useState(false);
    const [ResetButton, setResetButton] = useState(false);

    useEffect(() => {
        // Validate if we have any filters
        if (GenderSearch || ColorSearch || CategorySearch || SizeSearch)
            filterFlag = true;
        else
            filterFlag = false;

        // Set filter url
        if (filterFlag) {
            if (GenderSearch) {
                url += `gender=${GenderSearch}`;
                // Validate if we have more than one filter
                if (ColorSearch)
                    url += `&color=${ColorSearch}`;
                if (CategorySearch) {
                    url += `&category=${CategorySearch}`;
                    if (SizeSearch)
                        url += `&size=${SizeSearch}`;
                }
            }
            else if (ColorSearch) {
                url += `color=${ColorSearch}`;
                // Validate if we have more than one filter
                if (CategorySearch) {
                    url += `&category=${CategorySearch}`;
                    if (SizeSearch)
                        url += `&size=${SizeSearch}`;
                }
            }
            else if (CategorySearch) {
                url += `category=${CategorySearch}`;
                // Validate if we have more than one filter
                if (SizeSearch)
                    url += `&size=${SizeSearch}`;
            }
        }

        // Make request to API
        if (FilterButton) {
            // Get filtered data from API
            console.log(`Filter URL: ${url}`);
            const uwu = 'hola';
            axios.get(url)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
            setFilterButton(false);
            navigate('/feed/filtered', {
                state: {
                    filteredUrl: url
                }
            });
        }
    }, [GenderSearch, ColorSearch, CategorySearch, SizeSearch, FilterButton]);

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

        const mappedOptions = _sizeOptions.map(option => {
            i++;
            return (
                <option key={i} value={option.value}>{option.value}</option>
            )
        })

        setSizeOptions(mappedOptions);

    }, [category])


    useEffect(() => {
        const getData = async () => {
            let { data } = await axios.get(categoriesUrl);
            const mappedCategories = (data.categories).map((cat, index) => {
                return <option key={index} value={cat.value}>{cat.name}</option>
            })
            setCategories(mappedCategories);
        };
        getData();
    });

    return (
        <div className='modal-container'>
            <section className="search-modal">
                <div className="search-modal-searching-section">
                    <div className="search-figure">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="search" type="text" placeholder="Tu búsqueda aquí" />
                    </div>
                    {/* Close the modal */}
                    <button onClick={() => { cancelSearch(false); }}>Cancelar</button>
                </div>
                <div className="search-modal-filters">
                    <h3>Búsqueda por filtros</h3>
                    <div className="form-filters">
                        <label>Género:
                            <select name="genre" className="select-genre" onChange={(e) => {
                                if (e.target.value === "man")
                                    setGenderSearch("Masculino")
                                else if (e.target.value === "woman")
                                    setGenderSearch("Femenino")
                                else
                                    setGenderSearch(false)
                            }}>
                                <option value="none">Selecciona tu género</option>
                                <option value="woman">Mujer</option>
                                <option value="man">Hombre</option>
                            </select>
                        </label>
                        <label>Color:
                            <select name="color" className="select-color" onChange={(e) => {
                                if (e.target.value !== "none")
                                    setColorSearch(e.target.value)
                                else
                                    setColorSearch(false)
                            }}>
                                <option value="none">Selecciona un color</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Verde">Verde</option>
                                <option value="Azul">Azul</option>
                                <option value="Morado">Morado</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Cyan">Cyan</option>
                            </select>
                        </label>
                        {/* Puede dejar sin seleccionar la categoría */}
                        <label>Categoría:
                            <select name="category" className="select-category" onChange={(e) => {
                                setCategory(e.target.value);
                                if (e.target.value !== "none") {
                                    setCategorySearch(e.target.value);
                                    setAllowSize(true);
                                }
                                else {
                                    setCategorySearch(false);
                                    setAllowSize(false);
                                    setSizeSearch(false);
                                }
                            }}>
                                <option value="none">Selecciona una categoría</option>
                                {Categories}
                            </select>
                        </label>
                        {/* Si no ha seleccionado una categoría entonces no podrá escoger una talla porque este cambia según el tipo de producto */}
                        {AllowSize ? (<label>Talla:
                            <select name="size" className="select-size" onChange={(e) => {
                                setSizeSearch(e.target.value);
                            }}>
                                {sizeOptions}
                            </select>
                        </label>) : <></>}
                        <div className="actions">
                            <button name="clean" className="search-modal-filter-clean" onClick={(e) => { setResetButton(true) }}>Limpiar</button>
                            <button name="filter" className="search-modal-filter" onClick={(e) => { setFilterButton(true) }}>Filtrar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SearchModal