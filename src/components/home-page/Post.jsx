import React from 'react';
import './Post.css'
const Post = () => {
    return (
        <>
            <div className="geral">
                <div className="foto-perfil">
                    <img src="http://lorempixel.com/50/50/people" alt="" />
                </div>
                <div className="conteudo">
                    <div className="usuario">
                        <h2>NickName</h2>
                        <p>@NickName</p>
                    </div>
                    <div className="conteudo-post">
                        <p>Lorem Ipsun</p>
                        <img src="http://lorempixel.com/300/300/nature/" alt="" />
                    </div>
                    <div className="acao">
                        <p>[]</p>
                        <p>()</p>
                        <p>S2</p>
                        <p>--</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
