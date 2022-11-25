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
  let sumAccount = 1681.37;

  return (
    <Navbar bg="primary" variant="dark" className={style ? open : closed}>
      <div className="dropdown-container" onClick={() => {
                setStyle(!style);
              }}>
        <Dropdown
          key={"start"}
          id={`dropdown-button-drop-${"start"}`}
          drop={"start"}
          variant="primary"
        >
          <Dropdown.Toggle className="">
            <span
              className="display-6"
         
            >
              <i className="bi bi-list"></i>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className=" me-2 ">
            <Dropdown.Header className="dropdown-hover ">
              <div className="d-flex flex-row dropdown-hover">
                <div className="display-3 me-3 ms-3 pt-2">
                  <i className="bi bi-person-vcard-fill"></i>
                </div>
                <div className="d-flex flex-column ms-3 mt-3">
                  <div className="text-muted text-capitalize fs-5">nombre</div>
                  <div className="text-muted fs-5">@etiqueta</div>
                </div>
              </div>
            </Dropdown.Header>
            <Dropdown.Header className="dropdown-hover ">
              <div className=""></div>
            </Dropdown.Header>
            <Dropdown.Header className="dropdown-hover">
              <div className="fs-4 fw-bold">
                <i className="text-muted me-1 bi bi-currency-dollar"></i>
                {sumAccount}
              </div>
              <div className="fs-5 text-muted fw-normal  text-capitalize">
                Account Balance
              </div>
            </Dropdown.Header>
            <Dropdown.Item className="mt-5 text-muted fw-normal mb-3 fs-6 " eventKey="1">
              <i className="bi bi-house-door-fill me-4"></i>
              Home
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" className="text-muted fw-normal mb-3 fs-6">
              <i className="bi bi-person-fill me-4"></i>
              My Account
            </Dropdown.Item>

            <Dropdown.Item eventKey="3" className="text-muted fw-normal mb-3 fs-6">
              <i className="bi bi-bank2 me-4"></i>
              Bank Accounts
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" className="text-muted fw-normal mb-3 fs-6">
            <i className=" bi bi-bell-fill me-4"></i>
              Notifications
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" className="text-muted fw-normal mb-3 fs-6 mt-5">
            <i className="bi bi-box-arrow-right me-4 "></i>
             Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Navbar.Brand href="#home" className="">
        <div className="fw-bold fst-italic">
          <span>
            <i className="border rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
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
            <i className=" me-1 bi bi-currency-dollar"></i>New
          </Nav.Link>
          <Nav.Link className=" me-5" href="#link">
            <i className="text-white bi bi-bell-fill"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default DropStartComponent;
