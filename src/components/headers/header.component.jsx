import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg"
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/users/user.selector";
import { auth } from "../firebase/firebase.utils";
import CartDropDown from "../CartDropDown/cartDropDown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { connect } from "react-redux";
import { OptionLink,HeaderComponent,LogoContainer,OptionDiv,OptionsContainer } from "./header.styles";

const Header = ({ currentUser,hidden }) => {
    return(
        <HeaderComponent>
            <LogoContainer to="/" >
           <Logo className='logo'/>
           </LogoContainer>
        <OptionsContainer>
             <OptionLink to="/shop">
                 SHOP
             </OptionLink>
             <OptionLink to="/contacts" >
                 CONTACTS
             </OptionLink>
             {
                 currentUser ? <OptionDiv  onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink  to="/signin"> SIGN IN</OptionLink>
             }
             
             <CartIcon />
        </OptionsContainer>
          
        {hidden ? null : <CartDropDown />}
        </HeaderComponent>
    )
    
}
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);