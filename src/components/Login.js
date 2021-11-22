import React, { Component } from 'react'
import './Login.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Designer from './Designer';
import { useState } from 'react';
import UserNavbar from './User/UserNavbar';
import DesignerNavbar from './Designer/DesignerNavbar';
import CompanyNavbar from './Company/CompanyNavbar';
import UserPage from './User/UserPage';
import DesignerPage from './Designer/DesignerPage';
import CompanyPage from './Company/CompanyPage';

const clientId = "219655134441-j95re8cp22d86ir2t5i1v2gqjs9r1c3n.apps.googleusercontent.com";

function Login() {


    const [roleId, setroleId]=useState(0);
    
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        const id=localStorage.getItem('roleId');
        setroleId(id);
        console.log(roleId);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    const  myFunction=() => {
        var x = document.getElementById("login");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      const returnNavbar=(rId) =>
      {

          console.log(rId);
          if(rId==0)
          {
            return
          }
         
          if(rId==1)
          {
              return <UserPage/>   
          }
          else if(rId==2)
          {
              return <DesignerPage/>
          }
          
        
        return <CompanyPage />
      }

    return (
        <div className="full" >
            { showloginButton ?
            <div>
            <h1 id="login" style={{marginTop:50}}>Login via Google</h1>
             <GoogleLogin
             className="login"
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    
                />
            </div>
            
                : null}
            
            { showlogoutButton ?
            <div>
                
                
                {returnNavbar(roleId)}
                {/* <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> */}
                
                
                </div>: null
            }

        </div>
    );
}
export default Login;