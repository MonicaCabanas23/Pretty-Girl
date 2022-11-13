import React, {useState, useEffect} from 'react'

const Description = ({key, title, descriptionObject}) => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const mappedText = descriptionObject.map((key, value) => {
            return <p>{key}: {value}</p>
        })
        setFields(mappedText);
    }, []);

    return (
        <div key={key}>
            <h3>{title}</h3>
            {fields}
        </div>
    )
}

export default Description