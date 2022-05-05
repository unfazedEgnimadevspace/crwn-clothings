import React from "react"
import "./button.styles.scss";

const CustomButton = ({children, isGoogleSignIn,inverted, ...OtherProps}) =>{
    return(
        <button className={` ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...OtherProps}>
           {children}
        </button>
    )
}
export default CustomButton;