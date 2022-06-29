import React from "react";
import { Navbar, Container } from "react-bootstrap";
import IconNav from "../assets/pngwing.png";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar variant="dark" className="navClr">
        <Container>
          <Navbar.Brand
            className="d-flex "
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src={IconNav}
              width="40"
              height="40"
              className="d-inline-block align-top img-fluid"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPage;
