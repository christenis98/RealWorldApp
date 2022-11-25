import React from "react";

function UserSettings() {
  return (
    <div className="container ">
      <div className=" row justify-content-center mt-5">
        <div className="m-5 ps-4 rounded bg-light col p-4 ">
          <div className="mt-4 p-3">
            <h3 className="text-primary ">User Settings</h3>
          </div>
          <div className="d-flex flex-row justify-content-start pb-5">
                <div className="col-4 border rounded-5">
                <i
                    className="ms-5 bi bi-person-fill-gear"
                    style={{ fontSize: "1500%" }}
                ></i>
                </div>

                <div className="col-6 ms-5 d-flex flex-column justify-content-center ">
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="form-control mb-2"
                />

                <input
                    type="text"
                    name="surname"
                    placeholder="surname"
                    className="form-control mb-2"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    className="form-control mb-2"
                />

                <input
                    type="number "
                    maxLength={9}
                    name="number"
                    placeholder="666666666"
                    className="form-control mb-2"
                />

                <div className="">
                    <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary mt-3"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
