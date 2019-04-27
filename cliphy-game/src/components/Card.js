import React from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function CardComponent(props) {
    return (
        <Card>
            <Button onClick={() => alert("clicked")}>
                <img src={"https://media2.giphy.com/media/B6odR0DhsStfW/200w.webp?cid=790b76115cc3a9284759394a6ba54da1&rid=200w.webp"} />
            </Button>
        </Card>
        // <Card>
        //     <Button onClick={() => props.buttonLogic(props.id)}>
        //         <img alt={props.title} src={props.image} style={{ margin: "0 auto" }} />
        //     </Button>
        // </Card>
    );
}

export default CardComponent;