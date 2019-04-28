import React from "react";
import Card from "react-bootstrap/Card"

function CardComponent(props) {
    return (
        <Card
            style={{
                width: "200 px",
                height: "200 px",
                position: "relative",
                float: "left",
                backgroundColor: "green",
                border: "none"
            }}
            onClick={() => props.buttonLogic(props.id)} //Click event handlet
        >

            <Card.Img
                src={props.image}
                alt={props.name}
            />
            {/* for testing, display ID */}
            <p>{props.clicked}</p>
        </Card>
    );
}

export default CardComponent;