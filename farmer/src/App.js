
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';




function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   
  </Routes>
</Router>
  );
}

export default App;
