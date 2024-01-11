
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';
import Contact from "./pages/cont"
import Signup from "./pages/signup"
import Dashboard from "./pages/admindashbo"







function App() {
  return (
 
<Router>
  <Routes>
    <Route path='/welcome' element={<Welcome/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    
    
    
   
  </Routes>
</Router>

  
  );
}

export default App;
