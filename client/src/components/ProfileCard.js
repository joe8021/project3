// import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../components/ProfileCard.css"
import "../components/ProfileCard.css";
import API from '../utils/API';
import React, { Component } from 'react'
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
    last: ""
  };

  

  componentDidMount(){
    this.loadUser()
  }

  loadUser = () => {
    console.log("working");
    
    API.getUserData()
      .then(res => this.setState({users:res.data, first: "", last: ""})
    )
    .catch(err => console.log(err));
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
        

    
  return (
    <div>
      <Card>
        <CardImg style = {ImgStyle.imgResize} src = "https://image.flaticon.com/icons/svg/21/21294.svg" alt="Profile Image" />
        <CardBody className="textAlign">
          
          <CardTitle> <h1>{first + " " + last}</h1> </CardTitle>
          <CardSubtitle>Age: <h3>{age}</h3></CardSubtitle>
          <CardSubtitle>Height: <h4>{height}</h4></CardSubtitle>
          <CardSubtitle>Weight: <h4>{weight}</h4></CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};
}

export default ProfileCard;