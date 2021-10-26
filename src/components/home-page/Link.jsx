import React from 'react';
import './Link.css'
const Link = ({children}) => {
    return ( 
        <button className="button-menu" href="">{children}</button>
     );
}
 
export default Link;