import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../components/ProfileCard.css"
// import profilepic from '../components/images/profilepic'



const ProfileCard = (props) => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-grey-photo-518740768" alt="Card image cap" /> */}
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