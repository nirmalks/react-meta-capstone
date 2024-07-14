import "./App.css";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
