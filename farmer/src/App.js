
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Contact from "./pages/contact-us";
import About from "./pages/about.";
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
</Router>
  );
}

export default App;
