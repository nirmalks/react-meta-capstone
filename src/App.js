import "./App.css";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-success" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
