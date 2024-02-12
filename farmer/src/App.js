
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';
import Contact from "./pages/cont"
import Signup from "./pages/signup"
import Dashboard from "./pages/admindashbo"
import Memberdash from "./pages/memberdashboard"
import ReqTobemember from "./pages/requestTobemember"
import Homemore from './pages/homemore';
import Aboutus from './pages/about';
import Impact from './pages/impact';







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
    <Route path='/memberboard' element={<Memberdash/>}></Route>
    <Route path='/torequesttobemember' element={<ReqTobemember/>}></Route>
    <Route path='/homemore' element={<Homemore/>}></Route>
    <Route path='/about'  element={<Aboutus/>}></Route>
    <Route path='/impact' element={<Impact/>}></Route>
    
    
    
   
  </Routes>
</Router>

  
  );
}

export default App;
