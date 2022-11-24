import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../css/DropStartComponent.css";

const DropStartComponent = () => {


  //when click menu change css class
  const [style, setStyle] = useState(false);

  const open = "justify-content-between button-margin";
  const closed = "justify-content-between";

  return (
    <Navbar bg="primary" variant="dark" className={style ? open : closed}>
      <div className="dropdown-container">
        <Dropdown
          key={"start"}
          id={`dropdown-button-drop-${"start"}`}
          drop={"start"}
          variant="primary"
        >
          <Dropdown.Toggle className="ms-5">
            <span className="display-6">
              <i
                className="bi bi-list"
                onClick={() => {
                  setStyle(!style);
                }}
              ></i>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className=" me-2 ">
            <Dropdown.Item eventKey="1">
              <div className="d-flex flex-row">
                <div className="display-3 me-3 ms-3">
                  <i className="bi bi-person-vcard-fill"></i>
                </div>
                <div className="d-flex flex-column ms-3 mt-2">
                  <div>nombre</div>
                  <div>etiqueta</div>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item className="mt-5 " eventKey="2">
              Another action
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>

            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Navbar.Brand href="#home" className="">
        <div className="fw-bold fst-italic">
          <span>
            <i className="border rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar"></i>
          </span>
          Real Wold App
        </div>
      </Navbar.Brand>
    
      <Navbar id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link
            href="#home"
            className="btn btn-success text-uppercase fw-bold ms-3 me-3 ps-3 pe-3"
          >
            {" "}
            <i className=" me-1 bi bi-currency-dollar"></i>New
          </Nav.Link>
          <Nav.Link href="#link">
            <i className="text-white bi bi-bell-fill"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default DropStartComponent;
