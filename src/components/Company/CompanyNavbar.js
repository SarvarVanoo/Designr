import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './CompanyNavbar.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "219655134441-j95re8cp22d86ir2t5i1v2gqjs9r1c3n.apps.googleusercontent.com";

class CompanyNavbar extends Component {
    state ={ clicked: false,
        showlogoutButton:true,
        showloginButton:false,
        showRequests: true,
        showPolls: false}

    
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
        this.state.showRequests= !this.state.showRequests;
        this.state.showPolls= !this.state.showPolls;
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
                    style={{}}
                >
                </GoogleLogout>
            </nav>
            {this.state.showRequests ? <div className="requests"><h1>Requests</h1></div> : 
                    <div className="polls"><h1>Polls</h1></div>}
            </div>
        )
    }
}

export default CompanyNavbar
