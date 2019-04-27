import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import CardComponent from "./Card";

class GameContainer extends Component {
    state = {
        apiCards: [], //array for giphs from API call
        score: 0, //set score for page load, will be incremented for each succesful click
        highScore: 0 //high score for this session, maybe add cookie or local storage for persistent score?
    };

    // on DOM 'mount' hit api to get cool cat giphs
    componentDidMount() {
        this.getGiphs("cats"); //call API util and look for cat giphs
    }

    // API call for giphs
    getGiphs = query => {
        console.log("getGiphs()")
        API.search(query)
            .then(res => {
                let data = res.data.data
                //add clicked prop of false
                data.map((card) => {
                    card.clicked = false;
                    return card;
                })
                this.setState({ apiCards: data })
            }) //this is busted. can see returned array but can't work within/around it
            .catch(err => console.log(err));
    }

    // Fisher-Yates shuffle algorithm (stack overflow win)
    shuffleGiphs = (array) => {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array; //rewrite DOM with new array
    }

    buttonLogic = id => {
        //if clicked and value is false then set new state (& call add to score function)
        //if value is true run a reset function
        let gameOver = false;
        let newAPICards = this.state.apiCards.map(card => {
            if (card.id === id) { //find the one that was clicked
                if (card.clicked) { //if clicked = true
                    gameOver = true;
                } else {
                    card.clicked = true;
                }
            }
            return card;
        })
        if (gameOver === false) {
            this.setState({
                apiCards: this.shuffleGiphs(newAPICards)
            });
            this.incrementScore();
        }

    }

    // shuffleBoard = () => {
    //     let gameCards = shuffleGiphs(apiCards); //new variable to pass into shuffle function
    //     this.setState({ apiCards: gameCards }); //set state to shuffled array
    // }

    incrementScore = () => {
        let newScore = this.state.score + 1;
        console.log(newScore)
        this.setState({ score: newScore }) //set state of score equal to value plus one
        if (newScore > this.state.highScore) { //if new score beats high score, replace high score
            this.setState({
                highScore: newScore
            })
        } else if (newScore === 9) {
            alert("YOU WIN!") //maybe do something more elegant here...
        }
    }

    gameReset = () => {
        this.setState({
            apiCards: {}, //array for giphs from API call
            score: 0, //set score for page load, will be incremented for each succesful click
            highScore: 0 //high score for this session, maybe add cookie or local storage for persistent score?
        })
    }


    render() {
        console.log(this.state.apiCards)
        return (
            <Container>
                <Row>
                    <Col>
                        {this.state.apiCards.map(giph => (
                            <CardComponent
                                buttonLogic={() => { this.buttonLogic(giph.id) }}
                                id={giph.id}
                                image={giph.images.fixed_width.url}
                                title={giph.title}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default GameContainer