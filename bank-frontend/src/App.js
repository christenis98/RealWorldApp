import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge'
import DropStartComponent from './js/DropStartComponent';
import UserSettings from './js/UserSettings';

import Container from "react-bootstrap/Container";
import Transactions from './js/Transactions';

function App() {
  return (
    <Container fluid>

      <DropStartComponent />
      <UserSettings />
      <Transactions/>
  </Container>
  );
}

export default App;
