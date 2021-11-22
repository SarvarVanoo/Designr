import React, { Component } from 'react'
import './Welcome.css';
import {useHistory} from "react-router-dom";

function Welcome(){
    let history = useHistory();
        return (
            <div className="full">
               <h1 style={{marginTop:50}}>Welcome</h1> 
               <button className="button" onClick={()=>{history.push('/login')}}>Login</button>
               
               <button className="button" onClick={()=>{history.push('/register')}}>Register</button>
            </div>
        ) 
}

export default Welcome
