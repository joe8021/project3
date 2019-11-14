import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


const Exercises = (props) => {
 

  return (
    <div>
      {props.currentCategory.map(e =>
        <div key={e.name}>

          <Card style={{borderRadius: ' 5%', marginBottom: '20px', borderColor: 'black'}}>
            <CardBody>
              <CardTitle><h1>{e.name}</h1></CardTitle>
              <CardSubtitle><h2>{e.type}</h2></CardSubtitle>
            </CardBody >
          
            <CardBody>

            <img style={{ borderRadius: ' 5%', height: '300px', width: '375px'}} src={e.demo} />

              <CardText>
                <p>{e.instructions}</p>

                <h2>Sets</h2>
                <p>
                 <span style={{color: 'black'}}>Novice: </span> <span style={{marginRight: '10px'}}>2-3</span>
                  <span style={{color: 'black'}}>Intermediate: </span> <span style={{marginRight: '10px'}}>3-4</span>
                  <span style={{color: 'black'}}>Advanced: </span> <span style={{ marginRight: '10px'}}>4-6</span>
                </p>

                <h2>Repetitions</h2>
                <p>
                 <span style={{color: 'black'}}>Light: </span> <span style={{marginRight: '10px'}}>12-15</span>
                  <span style={{color: 'black'}}>Moderate: </span> <span style={{marginRight: '10px'}}>8-10</span>
                  <span style={{color: 'black'}}>Heavy: </span> <span style={{ marginRight: '10px'}}>6-8</span>
                </p>
              
                <p><i>Does not include warm-up sets.</i></p>
              </CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>







        </div>)}

    </div>
  );
};

export default Exercises;