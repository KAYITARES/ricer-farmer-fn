
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
import Contact from './pages/cont';
import SignUp from './pages/signup';
// import Footer from './component/footer';
// import Logo from './component/logo';
import "../src/sass/main.scss"
import Aboutus from './pages/aboutus';
import Moreabout from './pages/aboutmore';
import Home from './pages/home';
import Homemore from './pages/homemore';
import Footer from './component/footer';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';







function App() {
  return (
 
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
    <Route path='/moreabout' element={<Moreabout/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/homemore' element={<Homemore/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>

    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    
    
   
  </Routes>
</Router>

  
  );
}

export default App;
