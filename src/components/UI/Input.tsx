import React, { useState } from 'react';

interface propsInterface {
    value: string;
    onChange: (e:React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<propsInterface> = (props) => {
  
    const {value, onChange} = props;
    return (
        <input type="text" value={value} onChange={onChange}/>
    )
}

export default Input;
