import React, { Component } from 'react'
// import InfoCard from '../components/InfoCard'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import {
    Jumbotron, Container, Button, CardFooter
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import '../App.css'



class Home extends Component {

    render() {

        const wrapper = {
            // background: '#222',
            color: '#222',
            width: '100%',
            margin: 'auto, 0'
        }

        const buttonWidth = {
            width: '25%'
        }

        const startButton = {
            marginTop: '50'
        }

        return (
            <ParallaxProvider>
                <div>

                    <Parallax className="custom-class" x={[-60,25]} tagOuter="figure">
                        <div style={wrapper}>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">start your workout journey with ease.</h1>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Parallax>

                    <ParallaxBanner
                        className="your-class"
                        layers={[

                            {
                                image: 'https://i.ibb.co/TvZgxcV/person-holding-barbell-841130.jpg',
                                amount: 0.5,
                            },
                        ]}

                    >
                    </ParallaxBanner>

                    <Parallax className="custom-class" x={[100, 1]} tagOuter="figure">
                        <div style={wrapper}>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Curated exercise routines at your fingertips.</h1>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Parallax>

                    <ParallaxBanner
                        className="your-class"
                        layers={[

                            {
                                image: 'https://i.ibb.co/KwqsNK8/an-on-treadmill-1954524.jpg',
                                amount: 0.5,
                            },
                        ]}
                  
                    >
                    </ParallaxBanner>





                    <Parallax className="custom-class" x={[-60, 32]} tagOuter="figure">
                        <div style={wrapper}>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Dynamically Tracks your Progress to Reach your Goals Faster.</h1>
                                </Container>
                            </Jumbotron>
                        </div>
                    </Parallax>

                    <ParallaxBanner
                        className="your-class"
                        layers={[

                            {
                                image: "https://i.ibb.co/smYpHD7/active-adult-athlete-416778.jpg",
                                amount: 0.1,
                            },

                        ]} 
                    >
                        <Fade bottom>
                            <Button style={buttonWidth} color="primary" size="lg">Start Now!</Button>
                        </Fade>

                    </ParallaxBanner>

                    {/* <Parallax className="custom-class" x={[9, -100]} tagOuter="figure"> */}
                 
                    {/* </Parallax> */}
                </div>


                <CardFooter>
                    FitFix <span role="img" aria-label="flex">💪</span> This is a Footer <span role="img" aria-label="foot">🦶</span>
                </CardFooter>


            </ParallaxProvider>
        )
    }
}

export default Home
