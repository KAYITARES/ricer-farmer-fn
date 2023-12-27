
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Products from './pages/product';



function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='product' element={<Products/>}></Route>
  </Routes>
</Router>
  );
}

export default App;
