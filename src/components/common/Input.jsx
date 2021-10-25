import React from 'react';
import './Input.css'
const Input = ({children,handleNameInputChange,inputName}) => {
    return ( 
        <input onChange={handleNameInputChange} placeholder= {children} value={inputName} className="input" type="text" />
     );
}

export default Input;