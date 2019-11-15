import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import API from '../utils/API';
import Axios from 'axios';


class Exercises extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    users: [],
    id: '',
    name: ''
  };


  componentDidMount() {
    this.loadUser()
  }

  loadUser = (e) => {
    console.log("working");
    console.log(e);

    API.getUserData()
      .then(res => {
        console.log("BUTTON WORK");
        Axios.post("/api/saveExercises/" + res.data._id, { 'savedExercises': e }).then(data => this.state.id = res.data._id
        )

      })
      .catch(err => console.log(err));
    // console.log(this.state.id);

  };





  render() {



    return (


      <div>
        {this.props.currentCategory.map(e =>
          <div key={e.name}>
            {this.state.name = e.name}
            <Fade bottom>
              <Card style={{ marginBottom: '20px', borderColor: 'black', background: 'radial-gradient(circle, rgba(0,0,0,1) 92%, rgba(255,160,0,1) 97%, rgba(255,160,0,1) 100%)', color: 'white', borderRadius: '5%' }}>

                <CardBody>
                  <CardTitle><h1>{e.name}</h1></CardTitle>
                  <CardSubtitle><h2>{e.type}</h2></CardSubtitle>

                <Button onClick={() => this.loadUser(e.name)}><div>{"Save"}</div></Button>
                </CardBody >

                <CardBody>
                  <img style={{ borderRadius: ' 5%', height: '300px', width: '400px' }} src={e.demo} />
                  <CardText>

                    <p>{e.instructions}</p>

                    <h2>Muscles Groups</h2>
                    <div>{e.muscleTarget}</div> 


                    <h2>Sets</h2>
                    <p>
                      <span style={{ color: 'white' }}>Novice: </span> <span style={{ marginRight: '10px' }}>2-3</span>
                      <span style={{ color: 'white' }}>Intermediate: </span> <span style={{ marginRight: '10px' }}>3-4</span>
                      <span style={{ color: 'white' }}>Advanced: </span> <span style={{ marginRight: '10px' }}>4-6</span>
                    </p>

                    <h2>Repetitions</h2>
                    <p>
                      <span style={{ color: 'white' }}>Light: </span> <span style={{ marginRight: '10px' }}>12-15</span>
                      <span style={{ color: 'white' }}>Moderate: </span> <span style={{ marginRight: '10px' }}>8-10</span>
                      <span style={{ color: 'white' }}>Heavy: </span> <span style={{ marginRight: '10px' }}>6-8</span>
                    </p>

                    <p><i>Does not include warm-up sets.</i></p>
                  </CardText>
                </CardBody>
              </Card>
            </Fade>


          </div>)}


      </div>
    );
  }

};
 

          export default Exercises;          