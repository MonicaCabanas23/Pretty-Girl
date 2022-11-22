import { useEffect, useState } from "react";
import './ComboBox.scss'

function Combobox({ clase, name, options, setOption}) {
    const [value, setValue] = useState('');

    useEffect(() => {

        let id=0;

        const mappedOption = options.map(opcion => {
            id++;
            return (
                <option key={id} value={opcion.value}>{opcion.value}</option>
            )
        })
        setValue(mappedOption);
    }, [])

    return (
        <div className={clase} onChange={(e) => {setOption(e.target.value)}}>
            <select name={name}>
                {value}
            </select>
        </div>
    );
}

export default Combobox;
