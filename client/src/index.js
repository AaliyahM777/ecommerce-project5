// Index.js contains my react routing all imports from other components 

import React from 'react';
import './styles/generalstyles.css';
//import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Components/elements/Navbar';
import Footer from './Components/elements/Footer';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Contacts from './Components/pages/Contacts';
import { Switch, Route, Redirect , BrowserRouter as Router} from 'react-router-dom'
import httpClient from './httpClient'
import LogIn from './Components/elements/Login'
import LogOut from './Components/elements/Logout'
import SignUp from './Components/elements/Signup'



class App extends React.Component {
    state = { currentUser: httpClient.getCurrentUser() }
    onLoginSuccess(user) {
                                
        this.setState({ currentUser: httpClient.getCurrentUser() })
    }
    logOut() {
        httpClient.logOut()
        this.setState({ currentUser: null })
    }
    
    render() {
        const { currentUser } = this.state
        return (
            <Router>
                <NavBar/>
            <div className='App container'>
                <NavBar currentUser={currentUser} />
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route path="/Login" render={(props) => {
                        return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
                    }} />
                    <Route path="/Logout" render={(props) => {
                        return <LogOut onLogOut={this.logOut.bind(this)} />
                    }} />
                    {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
                    <Route path="/signup" render={(props) => {
                        return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
                    }} />
                      <Route path="/contacts" component={Contacts} />
                    <Route path="/products" render={() => {
                        return currentUser
                            ? <Products />
                            : <Redirect to="/login" />
                    }} />
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}
export default App



