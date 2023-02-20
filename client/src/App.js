
import './App.css';

import { BrowserRouter as Router , Routes,  Route } from "react-router-dom"
import Home from './components/Home';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ProductPage from './components/ProductPage';
import {LinkContainer} from "react-router-bootstrap"
function App() {
  return (

    <Router>
     <div className='d-flex flex-column custom-container'>
     <header>
        <Navbar bg="dark" variant ="dark">
          <Container>
            <LinkContainer to = "/">
              <Navbar.Brand>
                amazon
              </Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
       </header>

   <main>
   <Container>
   <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/product/:slug'  element  = {<ProductPage/>}/>
   </Routes>
 
   </Container>
  
  
   </main>

     <footer >
      <div className='text-center'> All rights reserved @2023</div>
     </footer>
     </div>


  
  
    </Router>
   
  );
}

export default App;
