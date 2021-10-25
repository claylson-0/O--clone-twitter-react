import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button'

import './AreaSignUp.css'
const AreaSignUp = () => {
    return ( 
        <div className="area-user-create">
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Button>Sign up</Button>
        </div>
     );
}
 
export default AreaSignUp;