import API from "../utils/API";
// import CardComponent from "./Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";

class GameContainer extends Component {
    state = {
        result: {}, //array for giphs from API call
        score: 0, //set score for page load, will be incremented for each succesful click
        highScore: 0 //high score for this session, maybe add cookie or local storage for persistent score?
    };

    // on DOM 'mount' hit api to get cool cat giphs
    componentDidMount() {
        this.getGiphs("cats");
    }

    // API call for giphs
    getGiphs = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    // Fisher-Yates shuffle algorithm (stack overflow win)
    shuffleGiphs = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a; //rewrite DOM with new array
    }

    // function to increment counter and set "state" of button as clicked for game logic
    buttonLogic = id => {
        //if clicked and value is false then set new state & add to score, 
        //if value is true run a reset function
    }

gameReset = ()=> {
    //shuffle array and write to DOM
    //reset game score to zero (leave high score alone)
}

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>DOM Stuff here</p>
                        {console.log(this.state.result.data)}


                        {/* {this.state.result.data.map(giph => (
                            <CardComponent
                                buttonLogic={this.buttonLogic}
                                id={giph.id}
                                image={giph.images.fixed_width.url}
                                title={giph.title}
                            />
                        ))} */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default GameContainer