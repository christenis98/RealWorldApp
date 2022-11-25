import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge'
import DropStartComponent from './js/DropStartComponent';
import UserSettings from './js/UserSettings';


function App() {
  return (
    <div>
    <h1>
      Window to switch between register and login{' '}
      <Badge bg="secondary" as="Button">
        New
      </Badge>
    </h1>
    <DropStartComponent/>
    <UserSettings/>
  </div>
  );
}

export default App;
