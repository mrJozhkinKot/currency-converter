import React from 'react';

interface propsInterface {
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<propsInterface> = (props) => {
    const {options, onChange} = props;
    return (
        <select size={1} name="currency" onChange={onChange}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
       </select>
    )
}

export default Select;