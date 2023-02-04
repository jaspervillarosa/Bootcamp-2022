import './App.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddData from './components/AddData';
import Admin from './components/Admin';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/add-data' element={<AddData/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Container>
      </Router>
  );
}

const Container = styled.div``;
export default App;
