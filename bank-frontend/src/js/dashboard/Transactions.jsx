import "../css/Transactions.css";
import React from "react";

const Transactions = (props) => {
  let money = 200.71;

  let sender = "Pepito";
  let reciever = "Lola";
  let likes = 0;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="m-5 ps-4 rounded bg-light col p-4">
            <div className="mt-4 p-3 ">
            <h3 className="text-primary mb-5 ">Transaction Detail</h3>
            </div>
         
          <div className="row justify-content-between fs-3 ps-3 pb-3">
            <div className=" col-1 d-flex flex-row justify-content-between">
              <div className="">
                <i className="bi bi-person-bounding-box fs-1 mt-5 mb-5 me-3 text-warning"></i>
              </div>
              <div className="">
                <i className="bi bi-person-bounding-box fs-1 text-warning"></i>
              </div>
            </div>

            <div className="col-2 text-danger d-flex justify-content-end">
              -<i className="p-0 m-0 bi bi-currency-dollar"></i>
              <div className="p-0 m-0">{money}</div>
            </div>
          </div>
          <h4 className="ps-3 pb-2">
            {sender} <span className="text-muted ">paga</span> {reciever}
          </h4>
          <h6 className=" ps-3 pb-2 text-muted fw-normal">
            Payment: usuario cifrado a otro usuario cifrado
          </h6>
          <div className="mt-2 d-flex col-1 mb-3 ps-3">
            <div className=" align-middle me-5 fs-4">{likes}</div>
            <button className="btn btn-outline-primary">
              <i className="bi bi-hand-thumbs-up  fs-5 text-center "></i>
            </button>
          </div>
          <div className=" ps-3 col-2 mb-4">
            <input
              className="mb-2 form-control "
              placeholder="Write a comment..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
