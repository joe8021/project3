import React from "react";
import { Button, Container, Row } from "reactstrap";
import API from "../utils/API";
import Exercises from "../components/Exercises";

class WorkoutPage extends React.Component {
  state = {
    data: [],
    currentCategory: []
  };
  

  componentDidMount() {
    this.loadExercises();
    console.log("component did mount" + this.state.data);
  }

  loadExercises = () => {
    API.getExercises().then(res => {
      console.log(res.data);
      let data = res.data;
      this.setState({ data });
      console.log(this.state)
    });
    console.log("state check: " + this.state.data);
  };
   handleClick = e =>{
       console.log("handleClick function works")
       console.log(e.target.id);
       this.state.currentCategory = this.state.data.filter(upperdata => upperdata.type === e.target.id)
       console.log(this.state.currentCategory);
       this.setState(
         {currentCategory:this.state.data.filter(upperdata => upperdata.type === e.target.id)}
       )
   }

   
  render() {
    console.log(this.state.currentCategory);
  
  const wrapper = {
    width: "45%",
  }

  const containerWrapper = {
    width: "100%",
  }
    
  const buttonStyle1 = {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
    backgroundImage: "url('https://i.ibb.co/c8J8qxg/several-rogue-gym-plates-1092878.jpg')"
  };

  const buttonStyle2 = {
     width: "100%",
      marginBottom: "10px",
      height: "80px",
      backgroundImage: "url('https://i.ibb.co/2Y3mmMM/person-lifting-barbell-indoors-2261485.jpg')"
  };
  
  const buttonStyle3 = {
      width: "100%",
      marginBottom: "10px",
      height: "80px",
      backgroundImage: "url('https://i.ibb.co/TvZgxcV/person-holding-barbell-841130.jpg')"
  };
  
  const buttonStyle4 = {
      width: "100%",
      marginBottom: "10px",
      height: "80px",
      backgroundImage: "url('https://i.ibb.co/smYpHD7/active-adult-athlete-416778.jpg')"
  };

    return (
      <div>
      <Container style={wrapper}>
    
        <Row>
        <Button style={buttonStyle1} id="fullbody"  color="primary" size="lg"> Full body</Button>
        </Row>

        <Row>
        <Button style={buttonStyle2} onClick={this.handleClick} id="Upper" color="primary" size="lg">Upper</Button>
        </Row>

        <Row>
        <Button style={buttonStyle3} onClick={this.handleClick} id="Lower" color="primary"  size="lg"> Lower</Button>
        </Row>

        <Row>
        <Button style={buttonStyle4} onClick={this.handleClick} id="Core" color="primary" size="lg">Core</Button>
        </Row>

     <Exercises currentCategory={this.state.currentCategory} />

      </Container>
      </div>




    );
  };
}
export default WorkoutPage;
