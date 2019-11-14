import React, { useState } from 'react';
import {
    Button, Container, Row,
} from 'reactstrap';


const WorkoutPage = (props) => {

    var buttonStyle1 = {
        width: "40%",
        height: "80px",
        marginBottom: "10px",
        backgroundImage: "url('https://i.ibb.co/c8J8qxg/several-rogue-gym-plates-1092878.jpg')"
    };

    var buttonStyle2 = {
        width: "40%",
        marginBottom: "10px",
        height: "80px",
        backgroundImage: "url('https://i.ibb.co/2Y3mmMM/person-lifting-barbell-indoors-2261485.jpg')"
    };

    var buttonStyle3 = {
        width: "40%",
        marginBottom: "10px",
        height: "80px",
        objectFit: "cover",
        backgroundImage: "url('https://i.ibb.co/TvZgxcV/person-holding-barbell-841130.jpg')"
    };

    var buttonStyle4 = {
        width: "40%",
        marginBottom: "10px",
        height: "80px",
        objectPosition: "50% 120%",
        backgroundImage: "url('https://i.ibb.co/smYpHD7/active-adult-athlete-416778.jpg')"
    };

    var collapseStyle = {
        width: "40%",
        
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>

            <Row>
                <Button style={buttonStyle1} color="primary" size="lg">Full</Button>
                   
            </Row>

            <Row>
                <Button style={buttonStyle2} color="primary" size="lg">Upper</Button>
            </Row>

            <Row>
                <Button style={buttonStyle3} color="primary" size="lg">Lower</Button>
            </Row>

            <Row>
                <Button style={buttonStyle4} color="primary" size="lg">Core</Button>
            </Row>

        </Container>

    );
}

export default WorkoutPage;