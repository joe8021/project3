import React from "react";
import { Button } from "reactstrap";
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
    
    return (
      <div>
        <Button id="fullbody"  color="primary" size="lg"> Full body</Button>
        <Button onClick={this.handleClick} id="upper" color="primary" size="lg">Upper</Button>
        <Button onClick={this.handleClick} id="lower" color="primary"  size="lg"> Lower</Button>
        <Button onClick={this.handleClick} id="core" color="primary" size="lg">Core
        </Button>
     <Exercises currentCategory={this.state.currentCategory} />
      </div>
    );
  }
}
export default WorkoutPage;
