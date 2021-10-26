import React from 'react';
import Button from '../common/Button';

import './MenuRigth.css'
const MenuRigth = () => {
    return (
        <>
            <div>
                <div className="like">
                    <div className="like-container">
                        <img src="http://lorempixel.com/50/50/people" alt="" />
                        <div className="conteudo">
                            <p>Lorem ipsum</p>
                            <p>@dolor sit</p>
                        </div>
                        <div>
                        <Button>seguir</Button>
                        </div>
                    </div>
                    <div className="like-container">
                        <img src="http://lorempixel.com/50/50/people" alt="" />
                        <div className="conteudo">
                            <p>consectetur</p>
                            <p>@adipiscing</p>
                        </div>
                        <div>
                        <Button>seguir</Button>
                        </div>
                    </div>
                    <div className="like-container">
                        <img src="http://lorempixel.com/50/50/people" alt="" />
                        <div className="conteudo">
                            <p>Duis luctus</p>
                            <p>@tortor</p>
                        </div>
                        <div>
                        <Button>seguir</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuRigth;