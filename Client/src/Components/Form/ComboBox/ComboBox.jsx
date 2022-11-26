import { useEffect, useState } from "react";
import './ComboBox.scss'

function Combobox({ clase, name, options, setOption, selectedIndex, setIndex, id, Comboboxindex }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        const mappedOption = options.map((opcion, index) => {
            let _option;
            Comboboxindex == 1 ? (selectedIndex.c1.index == index) ? (_option = <option key={index} value={opcion.value} selected>{opcion.value}</option>) : _option = <option key={index} value={opcion.value}>{opcion.value}</option>
                : (selectedIndex.c2.index == index) ? (_option = <option key={index} value={opcion.value} selected>{opcion.value}</option>) : _option = <option key={index} value={opcion.value}>{opcion.value}</option>
            return <option key={index} value={opcion.value}>{opcion.value}</option>;
        })
        setValue(mappedOption);
    }, [])

    const handleReusableType = (e) => {
        e.target.selectedIndex = 0;
    }
    const handleIndex = (e) => {
        if (Comboboxindex == 1) {
            selectedIndex.c1.index = e.target.value;
            setIndex(selectedIndex);
        }
        else if (Comboboxindex == 2) {
            selectedIndex.c2.index = e.target.value;
            setIndex(selectedIndex);
        }
    }

    return (
        <div className={clase} >
            <select name={name} value={Comboboxindex == 1 ? selectedIndex.c1.index:selectedIndex.c2.index} defaultValue={Comboboxindex == 1 ? selectedIndex.c1.index:selectedIndex.c2.index} onChange={(e) => {
                setOption(e.target.value);
                name === 'reusable' && handleReusableType(e);
                if (clase === 'save-index') handleIndex(e);
            }
            } >
                {value}
            </select>
        </div>
    );
}

export default Combobox;
