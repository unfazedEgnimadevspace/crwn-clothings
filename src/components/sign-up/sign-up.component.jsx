import React from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.comoponent';
import CustomButton from '../Button/button.component';
import { auth,createUserProfileDocument } from '../firebase/firebase.utils';



class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword:""
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event =>{
        const {value,name} = event.target
        this.setState({[name]: value})
        
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'> 
                   I do not have an account
                </h2>
                <span>
                    Sign Up with E-mail and Password
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" required  name="displayName" label="Name" onChange={this.handleChange} value ={displayName} />
                    <FormInput type="email" required  name="email" label="E-mail" onChange={this.handleChange} value ={email} />
                    <FormInput type="password" required  name="password" label="Password" onChange={this.handleChange} value ={password} />
                    <FormInput type="password" required  name="confirmPassword" label=" Confirm Password" onChange={this.handleChange} value ={confirmPassword} />
                   
                    <CustomButton type="submit">
                    Sign Up
                </CustomButton>
                </form> 
               
            </div>
        )
    }
}
export default SignUp;