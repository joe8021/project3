import React from 'react';
import {
    Button,
} from 'reactstrap';

const WorkoutPage = (props) => {


    return (

        <div>

            <Button color="primary" size="lg">Full</Button>
            <Button color="primary" size="lg">Upper</Button>
            <Button color="primary" size="lg">Lower</Button>
            <Button color="primary" size="lg">Core</Button>

        </div>

    );
}

export default WorkoutPage;