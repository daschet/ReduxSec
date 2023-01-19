import './App.css';
import Home from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/Login' element = {<Login/>} />
      <Route path='/Register' element = {<Register/>} />
      </Routes>
  );
}

export default App;
