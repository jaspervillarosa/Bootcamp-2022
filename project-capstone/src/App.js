import './App.css';
import styled  from 'styled-components';
import { BrowserRouter as Routes, Route, Router} from 'react-router-dom';
import Home from './components/home';
import Admin from './components/admin';

function App() {
  return (
    // <Router>
    //     <Container>
    //       <Routes>
    //         <Route path="/" element={<Home/>}/>
    //          <Route path="/admin" element={<Admin/>}/>
    //         <Route path="/contact" element={<Contact/>}/>
    //         <Route path="/about" element={<About/>}/>
    //         <Route path="/add-data" element={<AddData/>}/>
    //       </Routes>
    //     </Container>
    // </Router>
    
    <h1>Hello</h1>
  );
}


const Container = styled.div``;

export default App;
