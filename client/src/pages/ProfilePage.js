import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { Button, Container, Row, Col} from "reactstrap";


const ProfilePage = (props) => {

  const margin = {
    marginLeft: '15px'
  }
  return (
    <div>
      <Container>

        <Row style={margin}>
          <Col md="6">
            <ProfileCard />
        </Col>
        <Col md="6">
        
        </Col>
      </Row>

        


      </Container>

    </div>
  );
};

export default ProfilePage;