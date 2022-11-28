import DropStartComponent from "./DropStartComponent";
import "../../css/LeftSideComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LeftSideComponent = () => {
  let sumAccount = 1681.37;


  return (
    <div className="width-component">
      {/* <DropStartComponent show={show} /> */}
      <div className=" me-2 border ">
        <div className="d-flex flex-row ">
          <div className="display-3 me-3 ms-3 pt-2">
            <i className="bi bi-person-vcard-fill"></i>
          </div>
          <div className="d-flex flex-column ms-3 mt-3">
            <div className="text-muted text-capitalize fs-5">nombre</div>
            <div className="text-muted fs-5">@etiqueta</div>
          </div>
        </div>

        <div className="ms-3">
          <div className="fs-4 fw-bold">
            <i className="text-muted me-1 bi bi-currency-dollar"></i>
            {sumAccount}
          </div>
          <div className="fs-5 text-muted fw-normal  text-capitalize">
            Account Balance
          </div>
        </div>

        <div className="ms-3">
          <div className="mt-5 text-muted fw-normal mb-3 fs-6 ">
            <i className="bi bi-house-door-fill me-4"></i>
            Home
          </div>
          <Link className="text-muted fw-normal mb-3 fs-6" to={'/settings'}>
            <i className="bi bi-person-fill me-4"></i>
            My Account
          </Link>

          <div className="text-muted fw-normal mb-3 fs-6">
            <i className="bi bi-bank2 me-4"></i>
            Bank Accounts
          </div>
          <div className="text-muted fw-normal mb-3 fs-6">
            <i className=" bi bi-bell-fill me-4"></i>
            Notifications
          </div>
          <div className="text-muted fw-normal mb-3 fs-6 mt-5">
            <i className="bi bi-box-arrow-right me-4 "></i>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
  //     <div className="dropdown-container">
  //     <Dropdown
  //       key={"start"}
  //       id={`dropdown-button-drop-${"start"}`}
  //       drop={"start"}
  //       variant="primary"
  //     >
  //       <Dropdown.Toggle className="">

  //       </Dropdown.Toggle>
  //       <Dropdown.Menu className=" me-2 ">
  //         <Dropdown.Header className="dropdown-hover ">
  //           <div className="d-flex flex-row dropdown-hover">
  //             <div className="display-3 me-3 ms-3 pt-2">
  //               <i className="bi bi-person-vcard-fill"></i>
  //             </div>
  //             <div className="d-flex flex-column ms-3 mt-3">
  //               <div className="text-muted text-capitalize fs-5">nombre</div>
  //               <div className="text-muted fs-5">@etiqueta</div>
  //             </div>
  //           </div>
  //         </Dropdown.Header>
  //         <Dropdown.Header className="dropdown-hover ">
  //           <div className=""></div>
  //         </Dropdown.Header>
  //         <Dropdown.Header className="dropdown-hover">
  //           <div className="fs-4 fw-bold">
  //             <i className="text-muted me-1 bi bi-currency-dollar"></i>
  //             {sumAccount}
  //           </div>
  //           <div className="fs-5 text-muted fw-normal  text-capitalize">
  //             Account Balance
  //           </div>
  //         </Dropdown.Header>
  //         <Dropdown.Item className="mt-5 text-muted fw-normal mb-3 fs-6 " eventKey="1">
  //           <i className="bi bi-house-door-fill me-4"></i>
  //           Home
  //         </Dropdown.Item>
  //         <Dropdown.Item eventKey="2" className="text-muted fw-normal mb-3 fs-6">
  //           <i className="bi bi-person-fill me-4"></i>
  //           My Account
  //         </Dropdown.Item>

  //         <Dropdown.Item eventKey="3" className="text-muted fw-normal mb-3 fs-6">
  //           <i className="bi bi-bank2 me-4"></i>
  //           Bank Accounts
  //         </Dropdown.Item>
  //         <Dropdown.Item eventKey="4" className="text-muted fw-normal mb-3 fs-6">
  //         <i className=" bi bi-bell-fill me-4"></i>
  //           Notifications
  //         </Dropdown.Item>
  //         <Dropdown.Item eventKey="4" className="text-muted fw-normal mb-3 fs-6 mt-5">
  //         <i className="bi bi-box-arrow-right me-4 "></i>
  //          Logout
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Dropdown>
  //   </div>
};

export default LeftSideComponent;
