import { Container } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Component, useState } from "react";
import { UserService } from "../services/UserService";

export default class Signup extends Component{
  constructor() {
    super();
    this.state = {
     
      user: {
        id: null,
        name: null,
        surname: null,
        username: null,
        password: null,
      },
    };
    

     this.userService = new UserService();
    // //para  que reconozca el servicio en el dialogo!
    this.saveUser=this.saveUser.bind(this)
 

  }

  // componentDidMount() {
  //   this.userService.getAll().then((data) => console.log(data));
   
  // }

  saveUser() {
    

    console.log(this.userService)
    this.userService.save(this.state.user).then((data) => console.log(data));
    this.setState({
     
      user: {
        id: null,
        name: null,
        surname: null,
        username: null,
        password: null,
      },
    })
    
    
    // this.userService.getAll().then((data) => this.setState({ users: data }));
  }

  render(){
    return(

    <Container fluid >
    <div className="row p-5 mt-5  justify-content-center" >
      <div className="col-8 bg-light rounded-2 d-flex align-middle flex-column">
        <div className="fw-bold fst-italic fs-3 text-center text-primary mt-5">
          <span>
            <i className="border border-primary rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
          </span>
          Real Wold App
        </div>
        <div className="text-center fs-3">Sign up</div>
        <div className=" d-flex flex-column justify-content-center">
         
          <MDBInput
              label="ID"
              name="id"
              type="text"
              className="mb-4 p-3"
              value={this.state.id}
              onChange={(event) => {
                let val = event.target.value;
                this.setState((prevState) => {
                  let user = Object.assign({}, prevState.user);
                  user.id = val;
                  return { user };
                });
              }}
            />
            <MDBInput
              label="First Name*"
              name="name"
              type="text"
              className="mb-4 p-3"
              value={this.state.name}
              onChange={(event) => {
                let val = event.target.value;
                this.setState((prevState) => {
                  let user = Object.assign({}, prevState.user);
                  user.name = val;
                  return { user };
                });
              }}
            />
            <MDBInput
              label="Last Name*"
              name="surname"
              type="text"
              className="mb-4 p-3"
              value={this.state.surname}
              onChange={(event) => {
                let val = event.target.value;
                this.setState((prevState) => {
                  let user = Object.assign({}, prevState.user);
                  user.surname = val;
                  return { user };
                });
              }}
            />
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
            <MDBInput
              label="Confirm Password*"
              name="confPass"
              type="password"
              className="mb-4 p-3"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <div className="d-flex flex-column">
              <Link to={'/Login'} className="btn btn-primary mt-3" onClick={this.saveUser}>Sign up</Link>

              <Link
                to={'/Login'}
                className=" pt-3 text-center text-decoration-underline"
              >
                I already have an account
              </Link>
            </div>
        
        </div>
      </div>
    </div>
    </Container>
    );
  }

}
// function Signup() {

//   const [state, setState] = useState({
//     first_name: "",
//     last_name: "",
//     username:"",
//     pass:"",
//     confPass:""
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

//   return (
//     <Container fluid >
//     <div className="row p-5 mt-5  justify-content-center" >
//       <div className="col-8 bg-light rounded-2 d-flex align-middle flex-column">
//         <div className="fw-bold fst-italic fs-3 text-center text-primary mt-5">
//           <span>
//             <i className="border border-primary rounded ps-3 pe-3 me-1 h5 bi bi-currency-dollar me-3"></i>
//           </span>
//           Real Wold App
//         </div>
//         <div className="text-center fs-3">Sign up</div>
//         <div className=" d-flex justify-content-center">
//           <Form className=" col-6  p-5 mt-3 rounded " onSubmit={handleSubmit}>
//             <MDBInput
//               label="First Name*"
//               name="first_name"
//               type="text"
//               className="mb-4 p-3"
//               value={state.first_name}
//               onChange={handleInputChange}
//             />
//             <MDBInput
//               label="Last Name*"
//               name="last_name"
//               type="text"
//               className="mb-4 p-3"
//               value={state.last_name}
//               onChange={handleInputChange}
//             />
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
//             <MDBInput
//               label="Confirm Password*"
//               name="confPass"
//               type="password"
//               className="mb-4 p-3"
//               value={state.confPass}
//               onChange={handleInputChange}
//             />
//             <div className="d-flex flex-column">
//               <Button type="submit" className="mt-3">Sign up</Button>

//               <Link
//                 to={'/Login'}
//                 className=" pt-3 text-center text-decoration-underline"
//               >
//                 I already have an account
//               </Link>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//     </Container>
//   );
// }
// export default Signup;
