import React from "react";
import Card from "react-bootstrap/Card"

function CardComponent(props) {
    return (
        <Card
            style={{
                width: "200 px",
                height: "200 px",
                position: "relative",
                float: "left"

            }}
            onClick={() => props.buttonLogic(props.id)} //Click event handlet
        >

            <Card.Img
                src={props.image}
                alt={props.name}
            />
        </Card>
    );
}

export default CardComponent;