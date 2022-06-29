import React from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  return (
    <>
      <Card
        onClick={props.onClick}
        style={{
          background: "#050a27",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
        <div>
          <img src={props.image} width={150} height={150} />
        </div>
        <div className="text-light mt-4">
          <h3>{props.text}</h3>
        </div>
      </Card>
    </>
  );
}

export default Cards;
