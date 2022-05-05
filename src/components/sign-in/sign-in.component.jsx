import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.comoponent";
import CustomButton from "../Button/button.component";
import { auth,signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
        } catch (error) {
            console.error("An error happened trying to sign in", error.message)
        }

        this.setState({email:"",password:""})
    }
    handleChange = event =>{
        const {value,name} = event.target
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
              <h2>
                  I already have an account
              </h2>
              <span>
                  Sign in with your email and password
              </span>

              <form onSubmit={this.handleSubmit}>
                  <FormInput type="email" name="email" value={this.state.email} required onChange={this.handleChange} label="Email"/>
                  <FormInput type="password" name="password" value={this.state.password} required onChange={this.handleChange} label="Password"/>
                <div className="button">
                  <CustomButton type="submit">Sign In</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google sign in</CustomButton>
                </div>
              </form>
            </div>
        )
    }
}
export default SignIn;