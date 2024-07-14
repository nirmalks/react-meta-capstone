import './App.css';
import Homepage from './Homepage';
import Bookingpage from './Bookingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
