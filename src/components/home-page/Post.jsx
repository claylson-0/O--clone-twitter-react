import React from 'react';
import { FaRegComment,FaRetweet,FaRegHeart,FaShareSquare } from 'react-icons/fa';
import './Post.css'
const Post = ({post}) => {
    return (
        <>
            <div className="geral">
                <div className="foto-perfil">
                    <img src={post.image} alt="" />
                </div>
                <div className="conteudo">
                    <div className="usuario">
                        <h2>{post.name}</h2>
                        <p>@{post.nickname}</p>
                    </div>
                    <div className="conteudo-post">
                        <p>{post.text}</p>
                        
                    </div>
                    <div className="acao">
                        <p><FaRegComment/></p>
                        <p><FaRetweet/></p>
                        <p><FaRegHeart/></p>
                        <p><FaShareSquare/></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
