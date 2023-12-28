
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Contact from './pages/cont';
import SignUp from './pages/signup';
import Footer from './component/footer';
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
  </Routes>
</Router>
  );
}

export default App;
