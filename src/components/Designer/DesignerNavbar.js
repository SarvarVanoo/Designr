import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './DesignerNavbar.css' 
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {Button} from "../Button";
import MyDesigns from './MyDesigns';
import CompanyList from './CompanyList';

const clientId = "219655134441-j95re8cp22d86ir2t5i1v2gqjs9r1c3n.apps.googleusercontent.com";

class DesignerNavbar extends Component {

    state ={ clicked: false,
    showlogoutButton:true,
    showloginButton:false,
    showMydesigns: true,
    showCompanyList: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    onSignoutSuccess =()=>{
        alert("You have been logged out successfully");
        console.clear();
        window.location.href='/';
        this.state.showloginButton = !this.setState.showloginButton;
        this.state.showlogoutButton = !this.setState.showlogoutButton;       
    }

    onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        this.state.showloginButton = !this.setState.showloginButton;
        this.state.showlogoutButton = !this.setState.showlogoutButton;
    }

    onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    }

    handleLink=()=>{
       this.state.showMydesigns= !this.state.showMydesigns;
       this.state.showCompanyList= !this.state.showCompanyList;
    }
    


    render() {
        return (
            <div>
           <nav className="NavbarItems">
               <h1 className="navbar-logo">Designr<i className="fab fa-dyalog"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                   {MenuItems.map((item, index) => {
                       return(
                        <li key={index} onClick={this.handleLink}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        
                       )
                      
                   })}
                   

                </ul>
               
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={this.onSignoutSuccess}
                >
                </GoogleLogout>
                {/* <Button clientId={clientId} onClick={this.onsignoutSuccess}>signout</Button> */}
            </nav>
            {this.state.showMydesigns ? <MyDesigns/> : 
                    <CompanyList/>}
            </div>
        )
    }
}

export default DesignerNavbar
