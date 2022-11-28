import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../css/DropStartComponent.css";
import LeftSideComponent from "./LeftSideComponent";

const DropStartComponent = (props) => {
  
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };
  console.log(isVisible);
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Button className="btn btn-primary " onClick={clickHandler}>
          <span className="display-6">
            <i className="bi bi-list"></i>
          </span>
        </Button>
        <Navbar.Brand href="#home" className="">
          <div className="fw-bold fst-italic">
            <span>
              <i className="border rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
            </span>
            Real Wold App
          </div>
        </Navbar.Brand>

        <div className="d-flex">
          <Nav.Link
            href="#home"
            className="btn btn-success text-uppercase fw-bold ms-3 me-3 ps-3 pe-3"
          >
            <i className=" me-1 bi bi-currency-dollar"></i>New
          </Nav.Link>
          <Nav.Link className=" me-5" href="#link">
            <i className="text-white bi bi-bell-fill"></i>
          </Nav.Link>
        </div>
      </Navbar>
      {isVisible && <LeftSideComponent />}
    </div>
  );
};

export default DropStartComponent;
