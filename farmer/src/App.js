
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Product from './pages/product';
import Single from './pages/Singleproduct';




function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
   
  </Routes>
</Router>
  );
}

export default App;
