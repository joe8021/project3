import React from 'react';
import {
Jumbotron, Container
} from 'reactstrap';

// const FontColor = {
//     color: 'black'
// }


const ImgStyle = {
    imgResize: {
        width: 150,
        heigth: 100,
    }
}

const cardStyle = {
    textStyle: {
        textAlign : 'right',
        color: `black` 
    }
}

const InfoCard = (props) => {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">start your workout journey with ease.</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};
  
  export default InfoCard;