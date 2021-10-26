import React, { useEffect, useState } from 'react';
import ButtonMenu from './ButtonMenu';
import Button from '../common//Button'
import Post from './Post'
import MenuRigth from './MenuRigth';
import axios from 'axios'
import { FaHome, FaHashtag } from 'react-icons/fa';

import { IoIosNotifications } from 'react-icons/io';
import { RiMoreFill } from 'react-icons/ri';
import './Home.css'

const Home = () => {

    const [post, setPost] = useState([
        {
            nome: "teste",
            nickname: "teste@teste.com",
            image: "123",
            text: ""
        },
    ]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get("https://fakerapi.it/api/v1/custom?_quantity=10&name=name&nickname=word&image=image&text=text")
            setPost(data.data)
        }
        fetchPost()
    })

    return (
        <>
            <div className="home">
                <div className="menu-left">
                    <ButtonMenu><FaHome /> <p>Home</p></ButtonMenu>
                    <ButtonMenu><FaHashtag /><p>Explore</p></ButtonMenu>
                    <ButtonMenu><IoIosNotifications /><p>Notification</p> </ButtonMenu>
                    <ButtonMenu><RiMoreFill /><p>More</p> </ButtonMenu>
                    <div>
                        <Button>Tweet</Button>
                    </div>
                </div>
                <div className="post">
                    {post.map(post => <Post post={post} />)}
                </div>
                <div className="menu-rigth">
                    <MenuRigth></MenuRigth>
                </div>
            </div>
        </>
    );
}

export default Home;
