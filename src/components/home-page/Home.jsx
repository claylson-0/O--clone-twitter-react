import React from 'react';
import Link from './Link';
import Button from '../common//Button'
import Post from './Post'
import Outro from './Outro';

import './Home.css'
const Home = () => {
    return ( 
        <>
        <div className="home">
        <div className="menu-lateral">
            <div>
           <Link>teste</Link> 
            </div>
           <div>
           <Button>aqui</Button>
           </div>
        </div>
        <div className="post">
            <Post></Post>
        </div>
        <div className="outro">
            <Outro></Outro>
        </div>
        </div>
        </>
     );
}
 
export default Home;
