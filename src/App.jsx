import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import AreaSignIn from './components/landing-page/AreaSignIn'
import AreaSignUp from './components/landing-page/AreaSignUp'
import Home from './components/home-page/Home';


const App = () => {
    const [login, setLogin] = useState([
        {
          nome: "",
          email: "",
          senha: "",
        },
      ]);

      const handleUserAddition=(nome,email,senha,confirmaSenha)=>{
        if(senha==confirmaSenha){  
        const newUser=[... login,{
              nome:nome,
              email:email,
              senha:senha,
          }]
          setLogin(newUser)
          console.log(newUser)
        }
          
      }
    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => (
                    <div className="landing-page">
                        <div className="div-logo">
                        </div>
                        <div className="div-login">
                            <AreaSignIn login={login}></AreaSignIn>
                            <AreaSignUp handleUserAddition={handleUserAddition}></AreaSignUp>
                        </div>
                    </div>
                )}
            />
            <Route
            path="/home"
            exact
            component={Home}
            />
        </Router>
    );
}

export default App;