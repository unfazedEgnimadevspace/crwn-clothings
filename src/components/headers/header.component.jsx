import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg"
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/users/user.selector";
import { auth } from "../firebase/firebase.utils";
import CartDropDown from "../CartDropDown/cartDropDown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { connect } from "react-redux";


const Header = ({ currentUser,hidden }) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
           <Logo className="logo" />
           </Link>
        <div className="options">
             <Link to="/shop" className="option">
                 SHOP
             </Link>
             <Link to="/contacts" className="option">
                 CONTACTS
             </Link>
             {
                 currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin"> SIGN IN</Link>
             }
             
             <CartIcon />
        </div>
          
        {hidden ? null : <CartDropDown />}
        </div>
    )
    
}
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);