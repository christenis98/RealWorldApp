import { Form, Button } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
function Signup() {
  return (
    <div className="row p-5 mt-5  justify-content-center">
      <div className="col-8 bg-light rounded-2 d-flex align-middle flex-column">
        <div className="fw-bold fst-italic fs-3 text-center text-primary mt-5">
          <span>
            <i className="border border-primary rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
          </span>
          Real Wold App
        </div>
        <div className="text-center fs-3">Sign up</div>
        <div className=" d-flex justify-content-center">
          <Form className=" col-6  p-5 mt-3 rounded ">
            <MDBInput
              label="First Name*"
              id="form1"
              type="text"
              className="mb-4 p-3"
            />
            <MDBInput
              label="Last Name*"
              id="form1"
              type="text"
              className="mb-4 p-3"
            />
            <MDBInput
              label="Username*"
              id="form1"
              type="text"
              className="mb-4 p-3"
            />
            <MDBInput
              label="Password*"
              id="form1"
              type="password"
              className="mb-4 p-3"
            />
            <MDBInput
              label="Confirm Password*"
              id="form1"
              type="password"
              className="mb-4 p-3"
            />
            <div className="d-flex flex-column">
              <Button className="mt-3">Sign up</Button>

              <a
                href="#"
                className=" pt-3 text-center text-decoration-underline"
              >
                I already have an account
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
