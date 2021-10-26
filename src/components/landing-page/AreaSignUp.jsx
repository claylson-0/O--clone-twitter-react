import React, { useState } from 'react';
import Button from '../common/Button'

import './AreaSignUp.css'

const AreaSignUp = ({ handleUserAddition }) => {

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState("")

    const handleNameInputChange = (e) => {
        setInputName(e.target.value)
    }
    const handleEmailInputChange = (e) => {
        setInputEmail(e.target.value)
    }
    const handlePasswordInputChange = (e) => {
        setInputPassword(e.target.value)
    }
    const handleConfirmPasswordInputChange = (e) => {
        setInputConfirmPassword(e.target.value)
    }

    const handleAddUserClick = () => {
        if (inputName != "" && inputEmail != "" && inputPassword != "" && inputConfirmPassword) {
            handleUserAddition(inputName, inputEmail, inputPassword, inputConfirmPassword)
            setInputName("")
            setInputPassword("")
            setInputConfirmPassword("")
            setInputEmail("")
        }
        else {
            alert("Preencha os campos")
        }
    }
    
    return (
        <div className="area-user-create">

            <input onChange={handleNameInputChange} value={inputName} placeholder="Nome" className="input" type="text" />
            <input value={inputEmail} onChange={handleEmailInputChange} placeholder="Email" className="input" type="email" />
            <input value={inputPassword} onChange={handlePasswordInputChange} placeholder="Senha" className="input" type="password" />
            <input value={inputConfirmPassword} onChange={handleConfirmPasswordInputChange} placeholder="Confirmar senha" className="input" type="password" />
            <Button onClick={handleAddUserClick}>Sign up</Button>
        </div>
    );
}

export default AreaSignUp;