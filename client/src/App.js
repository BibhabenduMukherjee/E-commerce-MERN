
import './App.css';

import { BrowserRouter as Router , Routes,  Route } from "react-router-dom"
import Home from './components/Home';
import ProductPage from './components/ProductPage';
function App() {
  return (

    <Router>

   <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/product/:slug'  element  = {<ProductPage/>}/>
   </Routes>
 

  
    </Router>
   
  );
}

export default App;
