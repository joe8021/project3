import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../components/ProfileCard.css"
import "../components/ProfileCard.css";
import API from '../utils/API';
import { withRouter } from 'react-router';

// const User = require('../../../models')

// import profilepic from '../components/images/profilepic'



const ImgStyle = {
    imgResize: {
        width: 150,
        heigth: 100,
    }
}

class ProfileCard extends Component {
  state = {
    users: [],
    first: "",
    last: "",
    exercises: "",
  };

  

  componentDidMount(){
    this.loadUser()
  }

  loadUser = () => {
    console.log("working");
    
    API.getUserData()
      .then(res => this.setState({users:res.data, first: "", last: "", exercises: ""}))
      // .then(res => console.log(res.data))
    .catch(err => console.log(err));
    
  };

  handleNewWorkoutClick = () => {
    //event.preventDefault();
    this.props.history.push('/workout');
  };

  

  render(){
        // console.log(this.state.users.map(user => user = user.age));
        // this.displayUser();
        console.log(this.state.users.first);
        console.log(this.state.users.last);
    var first = this.state.users.first;
    var last = this.state.users.last;
    var age = this.state.users.age;
    var weight = this.state.users.weight;
    var height = this.state.users.height;
    var savedWorkouts = this.state.users.savedExercises;    
    console.log(this.state.users.savedExercises);    

    
  return (
    <div>
      <Card style={{width: '40%'}}>
        <CardImg style = {ImgStyle.imgResize} src = "https://image.flaticon.com/icons/svg/21/21294.svg" alt="Profile Image" />
        <CardBody className="textAlign">
          
          <CardTitle> <h1>{first + " " + last}</h1> </CardTitle>
          <CardSubtitle><h4>Age:</h4><h6>{age}</h6></CardSubtitle>
          <CardSubtitle><h4>Height:</h4><h6>{height}</h6></CardSubtitle>
          <CardSubtitle><h4>Weight:</h4><h6>{weight}</h6></CardSubtitle>
          <CardSubtitle><h4>Saved Exercises:</h4> <h6>{" "  + savedWorkouts}</h6></CardSubtitle>
          <br></br>
          <Button onClick={()=>this.handleNewWorkoutClick()}>Start New Workout!</Button>
        </CardBody>
      </Card>
    </div>
  )
  }
};

export default withRouter(ProfileCard);