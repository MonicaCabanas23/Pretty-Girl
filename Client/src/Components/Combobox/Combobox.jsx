import { useEffect, useState } from "react";

function Combobox({ clase, name, options }) {
    const [value, setValue] = useState('');

    useEffect(() => {

        console.log(clase, name, options)
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
        <div className={clase}>
            <select name={name}>
                {value}
            </select>
        </div>
    );
}

export default Combobox;
