import { Button, Form } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Component, useState } from "react";
import { UserService } from "../services/UserService";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {};
    this.service = new UserService();

    this.loginHandler = this.loginHandler.bind(this);
  }
  componentDidMount() {
    this.service.getAll().then((data) => {
      console.log(data);
      this.setState({ users: data });
    });
    // this.service.getById("sdgdfhdsfh").then((data) => console.log(data));
    // this.setState({
    //   user: {
    //     username: null,
    //     password: null,
    //   },
    // });
    // console.log(this.state.users)
  }
  // handleInputChange = (event) => {
  //   this.setState((prevProps) => ({
  //     ...prevProps,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  // handleSubmit() {}
  loginHandler() {
    console.log("buton");
    console.log(this.state.users);
  }
  render() {
    return (
      <div className="row p-5 mt-5  justify-content-center">
        <div className="col-8 bg-light rounded-2 d-flex align-middle flex-column">
          <div className="fw-bold fst-italic fs-3 text-center text-primary mt-5">
            <span>
              <i className="border border-primary rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
            </span>
            Real Wold App
          </div>
          <div className="text-center fs-3">Sign In</div>
          <div className=" d-flex justify-content-center">
            <Form className=" col-6  p-5 mt-3 rounded ">
              <MDBInput
                label="Username*"
                name="username"
                type="text"
                className="mb-4 p-3"
                value={this.state.username}
                onChange={(event) => {
                  let val = event.target.value;
                  this.setState((prevState) => {
                    let user = Object.assign({}, prevState.user);
                    user.username = val;
                    return { user };
                  });
                }}
              />
              <MDBInput
                label="Password*"
                name="password"
                type="password"
                className="mb-4 p-3"
                value={this.state.password}
                onChange={(event) => {
                  let val = event.target.value;
                  this.setState((prevState) => {
                    let user = Object.assign({}, prevState.user);
                    user.password = val;
                    return { user };
                  });
                }}
              />

              <div className="d-flex flex-column">
                <Button
                  className="mt-3 btn btn-primary"
                  to={"/Dashboard"}
                  onClick={this.loginHandler}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

// function SignIn() {

//   const [state, setState] = useState({
//     username:"",
//     pass:""

//   });

//   const handleInputChange = (event) => {
//     setState((prevProps) => ({
//       ...prevProps,
//       [event.target.name]: event.target.value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(state);
//   };

//   const service= new UserService();
//   service.getAll().then(data=>console.log(data))

//   return (
//     <div className="row p-5 mt-5  justify-content-center">
//       <div className="col-8 bg-light rounded-2 d-flex align-middle flex-column">
//         <div className="fw-bold fst-italic fs-3 text-center text-primary mt-5">
//           <span>
//             <i className="border border-primary rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
//           </span>
//           Real Wold App
//         </div>
//         <div className="text-center fs-3">Sign In</div>
//         <div className=" d-flex justify-content-center">
//           <Form className=" col-6  p-5 mt-3 rounded " onSubmit={handleSubmit}>

//             <MDBInput
//               label="Username*"
//               name="username"
//               type="text"
//               className="mb-4 p-3"
//               value={state.username}
//               onChange={handleInputChange}
//             />
//             <MDBInput
//               label="Password*"
//               name="pass"
//               type="password"
//               className="mb-4 p-3"
//               value={state.pass}
//               onChange={handleInputChange}
//             />

//             <div className="d-flex flex-column">

//               <Link type="submit" className="mt-3 btn btn-primary" to={'/Dashboard'}>Sign in</Link>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default SignIn;
