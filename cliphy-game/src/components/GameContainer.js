import API from "../utils/API";
import CardComponent from "./Card";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Wrapper from "./Wrapper"


class GameContainer extends Component {


    state = {
        apiCards: [], //array for giphs from API call
        score: 0, //set score for page load, will be incremented for each succesful click
        highScore: 0 //high score for this session, maybe add cookie or local storage for persistent score?
    };

    // on DOM 'mount' hit api to get cool cat giphs
    componentDidMount() {
        const cuteAnimals = [ //array of cute li'l animals to add some variety
            "kittens", "puppies", "baby pig", "baby koala", "baby giraffe"
        ]
        let randomNum = Math.floor(Math.random() * cuteAnimals.length);
        const cutePick = cuteAnimals[randomNum];

        this.getGiphs(`${cutePick}`); //call API util and look for giphs
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
            })
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
        } else if (
            console.log("failure"),
            this.gameReset()
        );
    }

    incrementScore = () => {
        let newScore = this.state.score + 1;
        console.log(`Score: ${newScore}`)
        console.log(`High Score: ${this.state.highScore}`)
        this.setState({ score: newScore }) //set state of score equal to value plus one
        if (this.state.highScore <= newScore) { //if new score beats high score, replace high score
            this.setState({
                highScore: newScore
            })
        } else if (newScore === 10) {
            alert("YOU WIN!"); //maybe do something more elegant here...
            this.gameReset();
        }
    }

    gameReset = () => {
        this.setState({
            score: 0, //set score for page load, will be incremented for each succesful click
            highScore: this.state.highScore //high score for this session, maybe add cookie or local storage for persistent high score?
        });
        this.getGiphs("ducks");
    }


    render() {
        return (
            <Container>
                <Navbar>
                    <h1>Cliphy Game</h1>
                </Navbar>
                <Row>
                    <Wrapper>
                        {this.state.apiCards.map(giph => (
                            <CardComponent
                                buttonLogic={() => { this.buttonLogic(giph.id) }}
                                id={giph.id}
                                image={giph.images.fixed_height.url}
                                title={giph.title}
                            />
                        ))}
                    </Wrapper>
                </Row>
            </Container>
        )
    }
}

export default GameContainer