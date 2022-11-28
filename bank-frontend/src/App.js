import "./App.css";
import Container from "react-bootstrap/Container";
import Signup from "./js/inicio/Signup";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./js/inicio/SignIn";
import Transactions from "./js/dashboard/Transactions";
import DropStartComponent from "./js/dashboard/DropStartComponent";
import LeftSideComponent from "./js/dashboard/LeftSideComponent"
import UserSettings from "./js/dashboard/UserSettings";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/Login" element={<SignIn/>}></Route>
      <Route path="/Dashboard" element={<DropStartComponent/>}></Route>
      <Route path="/settings" element={<UserSettings/>}></Route>
      {/* <Route path="/menu" element={<LeftSideComponent/>}></Route> */}
    </Routes>
  );
}
export default App;
