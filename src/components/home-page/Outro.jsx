import React from 'react';
import Button from '../common/Button';

import './Outro.css'
const Outro = () => {
    return (
        <>
            <div>
                <div className="like">
                    <div className="like-container">
                        <img src="http://lorempixel.com/50/50/people" alt="" />
                        <div className="conteudo">
                            <p>nickname</p>
                            <p>@nickname</p>
                        </div>
                        <div>
                        <Button>seguir</Button>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="news-container">
                        <div className="news-conteudo">
                            <p>Loren Ipsum</p>
                            
                        </div>
                        <img src="http://lorempixel.com/50/50/people" alt="" />



                    </div>
                </div>
            </div>
        </>
    );
}

export default Outro;