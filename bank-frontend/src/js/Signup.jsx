
import { Form, Button } from "react-bootstrap";
import dollar_sign from '../img/dollar_sign.png';

function Signup() {
    return (
        <div>
        <header>
          <img src={dollar_sign} className="h-100" alt="" />
          Hello World Bank
          <p>Signing up</p>
        </header>
        <Form>
          <Form.Group className="mt-5 mb-3 w-25 mx-auto">
            <Form.Label>First name</Form.Label>:
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="mb-3 w-25 mx-auto">
            <Form.Label>Second name</Form.Label>:
            <Form.Control type="text" placeholder="Second name" />
          </Form.Group>
          <Form.Group className="mb-3 w-25 mx-auto">
            <Form.Label>Username</Form.Label>:
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3 w-25 mx-auto">
            <Form.Label>Password</Form.Label>:
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 w-25 mx-auto">
            <Form.Label>Confirm password</Form.Label>:
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          
          <Button className="mt-4">
            SIGN UP
          </Button>
        </Form>
      </div>
    );
  }

export default Signup;
