import React, { Component } from 'react'
// import InfoCard from '../components/InfoCard'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import {
    Jumbotron, Container, Button, CardFooter
} from 'reactstrap';
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

        return (
            <ParallaxProvider>
                <div>

                    <Parallax className="custom-class" x={[-50, 50]} tagOuter="figure">
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
                        style={{
                            height: '800px',
                        }}
                    >
                    </ParallaxBanner>

                    <Parallax className="custom-class" x={[50, -50]} tagOuter="figure">
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
                        style={{
                            height: '800px',
                        }}
                    >
                    </ParallaxBanner>





                    <Parallax className="custom-class" x={[-50, 50]} tagOuter="figure">
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
                                amount: 0.5,
                            },
                        ]}
                        style={{
                            height: '800px',
                        }}
                    >
                    </ParallaxBanner>

                    <Parallax className="custom-class" x={[9, -100]} tagOuter="figure">
                        <div>
                            {/* <Jumbotron fluid> */}
                            {/* <Container fluid> */}
                            <Button style={buttonWidth} color="primary" size="lg">Start Now!</Button>
                            {/* </Container> */}
                            {/* </Jumbotron> */}
                        </div>
                    </Parallax>
                </div>


                <CardFooter>
                    Get Buff with Victor <span role="img" aria-label="flex">💪</span> This is a Footer <span role="img" aria-label="foot">🦶</span>
                </CardFooter>


            </ParallaxProvider>
        )
    }
}

export default Home
