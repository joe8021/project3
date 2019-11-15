import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Fade from 'react-reveal/Fade';


const Exercises = (props) => {
 

  return (
    <div>
      {props.currentCategory.map(e =>
       <div key={e.name}>

<Fade bottom>
          <Card style={{ marginBottom: '20px', borderColor: 'black', background: 'radial-gradient(circle, rgba(0,0,0,1) 92%, rgba(255,160,0,1) 97%, rgba(255,160,0,1) 100%)', color: 'white', borderRadius: '5%'}}>
            <CardBody>
              <CardTitle><h1>{e.name}</h1></CardTitle>
              <CardSubtitle><h2>{e.type}</h2></CardSubtitle>
              <img style={{ borderRadius: ' 5%', height: '300px', width: '400px'}} src={e.demo}/>
            </CardBody>
          
            <CardBody>
              <CardText>
                
                <p>{e.instructions}</p>
        

                <h2>Sets</h2>
                <p>
                 <span style={{color: 'white'}}>Novice: </span> <span style={{marginRight: '10px'}}>2-3</span>
                  <span style={{color: 'white'}}>Intermediate: </span> <span style={{marginRight: '10px'}}>3-4</span>
                  <span style={{color: 'white'}}>Advanced: </span> <span style={{ marginRight: '10px'}}>4-6</span>
                </p>

                <h2>Repetitions</h2>
                <p>
                 <span style={{color: 'white'}}>Light: </span> <span style={{marginRight: '10px'}}>12-15</span>
                  <span style={{color: 'white'}}>Moderate: </span> <span style={{marginRight: '10px'}}>8-10</span>
                  <span style={{color: 'white'}}>Heavy: </span> <span style={{ marginRight: '10px'}}>6-8</span>
                </p>
              
                <p><i>Does not include warm-up sets.</i></p>
              </CardText>
              <Button>Save This Workout</Button>
              </CardBody>
          </Card>
          </Fade>







        </div>)}
      

    </div>
  );
};

export default Exercises;