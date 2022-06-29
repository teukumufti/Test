import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Row, Col, Spinner } from "react-bootstrap";
import { data } from "../components/Dummydata";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const title = "Home";
  document.title = "StarWars | " + title;

  const navigate = useNavigate();

  return (
    <div className="App">
      <Row>
        {data.map((item, index) => {
          return (
            <Col>
              <Card
                image={item.image}
                text={item.text}
                onClick={() => navigate(item.path)}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
