import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import ProfilePage from './pages/ProfilePage';
import WorkoutPage from './pages/WorkoutPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      name: ''
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      // console.log(response.data.user.name)
      console.log('Get user response: ')
      // console.log(response.data)
      if (response.data.user) {
        console.log("DATA:" + response.data);
        console.log('Get User: There is a user saved in the server session: ')
        

        this.setState({
          loggedIn: true,
          username: response.data.user.email,
          name: response.data.user.name
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Ready to workout {this.state.name}?</p>
      }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />

        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup 
              updateUser={this.updateUser}
              />}
        />
            
        
        <Route
          path="/myaccount"
          render={() =>
          <ProfilePage 
               />}
          />

        
        <Route
          path="/workout"
          render={() =>
          <WorkoutPage />}
          />
          
      </div>
    );
  }
}

export default App;
