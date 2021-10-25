import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

import './AreaSignIn.css'
const AreaSignIn = () => {
    return ( 
        <div className="area-login">
            <Input>Email</Input>
            <Input>Senha</Input>
            <Button>Sign in</Button>
        </div>
        
     );
}
 
export default AreaSignIn;