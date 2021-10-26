import React, { useEffect, useState } from 'react';
import Link from './Link';
import Button from '../common//Button'
import Post from './Post'
import Outro from './Outro';
import axios from 'axios'
import { FaHome,FaHashtag } from 'react-icons/fa';

import {IoIosNotifications} from 'react-icons/io';
import {RiMoreFill} from 'react-icons/ri';


import './Home.css'
const Home = () => {
    const [post, setPost] = useState([
        {
            nome: "teste",
            nickname: "teste@teste.com",
            image: "123",
            text:""
        },
    ]);

    useEffect(()=>{
        const fetchPost = async()=>{
            const {data} = await axios.get("https://fakerapi.it/api/v1/custom?_quantity=10&name=name&nickname=word&image=image&text=text")
            setPost(data.data)
        }
        fetchPost()
    })
  
  
    return ( 
        <>
        <div className="home">
        <div className="menu-lateral">
            
           <Link><FaHome/> <p>Home</p></Link> 
           <Link><FaHashtag/><p>Explore</p></Link> 
           <Link><IoIosNotifications/><p>Notification</p> </Link> 
           <Link><RiMoreFill/><p>More</p> </Link> 
            
           <div>
           <Button>Tweet</Button>
           </div>
        </div>
        <div className="post">
            {post.map(post => <Post post={post}/>)}
        </div>
        <div className="outro">
            <Outro></Outro>
        </div>
        </div>
        </>
     );
}
 
export default  Home;
