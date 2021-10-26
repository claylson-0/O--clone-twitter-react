import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { useHistory } from 'react-router-dom'

import './AreaSignIn.css'

const AreaSignIn = ({login}) => {

    const history = useHistory()

    const handleUserClick = () => {
        var userExists=false
        for (var i in login) {
            if (login[i].email == inputEmail && login[i].senha == inputPassword) {
                userExists= true
                
            }
        }
        if(userExists==true){
            history.push(`/home`)
        console.log("existe")
    }
    }


    const[inputEmail,setInputEmail]=useState("")
    
    const[inputPassword,setInputPassword]=useState("")
    

    const handleEmailInputChange=(e)=>{
        setInputEmail(e.target.value)
    }
    
    const handlePasswordInputChange=(e)=>{
        setInputPassword(e.target.value)
    }
    


    return ( 
        <div className="area-login">
                    <input onChange={handleEmailInputChange} value={inputEmail} placeholder= "Email" className="input" type="email" />
                    <input value={inputPassword} onChange={handlePasswordInputChange} placeholder= "Senha" className="input" type="password" />
            <Button onClick={handleUserClick}>Sign in</Button>
        </div>
        
     );
}
 
export default AreaSignIn;