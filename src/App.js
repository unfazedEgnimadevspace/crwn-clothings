import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/signIn-signUp-page.component";
import ShopPage from "./pages/shop/shop.component";
import CheckOutPage from "./pages/check-out-page/check-out-page.component.jsx";

import Header from "./components/headers/header.component";
import { auth } from "./components/firebase/firebase.utils";
import { createUserProfileDocument } from "./components/firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./redux/users/user.actions";
import { selectCurrentUser } from "./redux/users/user.selector";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);

        userReference.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
