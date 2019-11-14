import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../components/ProfileCard.css"
// import profilepic from '../components/images/profilepic'

const ImgStyle = {
    imgResize: {
        width: 150,
        heigth: 100,
    }
}

const ProfileCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg style = {ImgStyle.imgResize} src = "https://image.flaticon.com/icons/svg/21/21294.svg" alt="Profile Image" />
        <CardBody className="textAlign">
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Goal Weight</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileCard;