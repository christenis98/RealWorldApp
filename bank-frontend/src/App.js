import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge'
import DropStartComponent from './js/DropStartComponent';
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid>
   
    <DropStartComponent/>
    <Transactions money="200"/>
  </Container>
  );
}

export default App;
