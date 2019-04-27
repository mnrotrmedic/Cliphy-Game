import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function CardComponent(props) {
    return (
        <Card>
            <Button onClick={() => props.buttonLogic(props.id)}>
                <img alt={props.title} src={props.image} style={{ margin: "0 auto" }} />
            </Button>
        </Card>
    );
}

export default CardComponent;