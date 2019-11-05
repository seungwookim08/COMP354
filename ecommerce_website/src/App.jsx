import './App.css';
import React, { Component } from 'react';
import NavBar from "./Components/js/NavBar/NavBar";
import { Route, Switch} from "react-router-dom";
import Login from "./Components/js/Login/Login";
import HomePage from "./Components/js/HomePage/HomePage";
import AccountDashboard from "./Components/js/AccountDashboard/AccountDashboard";
import ItemDetailsPage from "./Components/js/DetailsPage/ItemDetails/ItemDetailsPage";
import RegisterPage from "./Components/js/RegisterPage/RegisterPage";
import CheckoutPage from "./Components/js/UserCart/CheckoutPage";
import ProfilePage from "./Components/js/ProfilePage/ProfilePage";
import UserDetails from "./Components/js/RegisterPage/RegisterPage";

class App extends Component {

  state = {
    isUserLoggedIn: (localStorage.getItem("userId") !== null) ? true : false
  }

  constructor(props) {
    super(props);
    this.checkIfUserIsLoggedIn = this.checkIfUserIsLoggedIn.bind(this);
  }

  checkIfUserIsLoggedIn() {
    console.log("checkIfUserIsLoggedIn is called from App");
    console.log(localStorage.getItem("userId") !== null);
    console.log(this.state.isUserLoggedIn + " before setState in App");
    var isLoggedIn = localStorage.getItem("userId") !== null;
    console.log("user isLoggedIn: " + isLoggedIn);

    this.setState({
      isUserLoggedIn: (isLoggedIn) ? true : false
    })
    console.log("isUserLoggedIn app after setState: " + this.state.isUserLoggedIn);
  }

  componentDidMount() {
    console.log("mount called in App isUserLoggedIn: " + this.state.isUserLoggedIn);
  }

  componentDidUpdate() {
    console.log(this.props);
    console.log("update called in App isUserLoggedIn: " + this.state.isUserLoggedIn);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          isUserLoggedIn={this.state.isUserLoggedIn}
          checkIfUserIsLoggedIn={this.checkIfUserIsLoggedIn}
          />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/COMP354" component={HomePage} />
          <Route path="/cart" />
          <Route path="/profile" component={ProfilePage}/>
          <Route path='/dashboard' component={AccountDashboard} />
          <Route path="/about"/>
          <Route path="/product/:id" component={ItemDetailsPage}/>
          <Route path='/RegisterPage' component={RegisterPage}/>
          <Route path='/Login' 
            component={()=> 
              <Login checkIfUserIsLoggedIn={this.checkIfUserIsLoggedIn}/>
            }
          />
          <Route path='/checkout' component={CheckoutPage}/>
          <Route path='/login' component={UserDetails}/>
        </Switch>
      </React.Fragment>
    );
  }
}



export default App;

