import { useEffect, useState } from "react";
import './ComboBox.scss'

function Combobox({ clase, name, options, setOption }) {
    const [value, setValue] = useState('');

    useEffect(() => {

        let id = 0;

        const mappedOption = options.map(opcion => {
            id++;
            return (
                <option key={id} value={opcion.value}>{opcion.value}</option>
            )
        })
        setValue(mappedOption);
    }, [])

    const handleReusableType = (e) => {
        e.target.selectedIndex = 0;
    }

    return (
        <div className={clase} >
            <select name={name} onChange={(e) => {
                setOption(e.target.value);
                name === 'reusable' && handleReusableType(e);
            }
            }>
                {value}
            </select>
        </div>
    );
}

export default Combobox;
