import React, { Component } from 'react'
import "./Register.css"
import Login from "./Login";

class Register extends Component {
    
      state= {
     loginVisible: false
   }

   loginState()
   {
     this.setState({
        loginVisible: true
     });
   }

   myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    render() {
        return (
            <div>
            <div id="myDIV" display="block">
                <form action="/login">
                <div class="container">
                
            <h1>Register</h1>
            <hr/>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label for="cars">Register as : </label>
            <br/>
            <hr/>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
             <button className="button" onClick={()=> {const confirm_value= window.confirm("Are you sure you want to continue as User"); 
      if(confirm_value==true)
      {
        this.loginState();
        this.myFunction();
        localStorage.setItem('roleId', 1);
      }}}>User</button>

      <button  className="button" onClick={()=> {const confirm_value= window.confirm("Are you sure you want to continue as Designer"); 
      if(confirm_value==true)
      {
        this.loginState();
        this.myFunction();
        localStorage.setItem('roleId', 2);
      }}}>Designer</button>

  <button className="button" onClick={()=> {const confirm_value= window.confirm("Are you sure you want to continue as Company"); 
      if(confirm_value==true)
      {
        this.loginState();
        this.myFunction();
        localStorage.setItem('roleId', 3);
      }}}>Company</button>
            

        
            
            {/* <button type="submit" class="registerbtn">Register</button> */}
            
                </div>

                <div class="container signin">  
                <p>Already have an account? <a href="#" onClick ={()=>{this.loginState(); this.myFunction();}}>Sign in</a>.</p>
                </div>
                </form>

        </div>
        
        {this.state.loginVisible? <Login/> : null}
        </div>
        )
    }
}

export default Register
