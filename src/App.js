import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rooms from './Rooms';
import Booking from './Booking';
import Contact from './Contact';

import './App.css'
function App() {
  return (
     <>
   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
