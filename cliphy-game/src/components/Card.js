import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function CardComponent(props) {
    return (
        // <Card>
        //     <Button onClick={() => props.buttonLogic(props.id)}>
        //         <img alt={props.title} src={props.image} /*style={{ margin: "0 auto" }}*/ />
        //     </Button>
        // </Card>

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