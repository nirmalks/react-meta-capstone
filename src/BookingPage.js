
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";

const initializeTimes = () => {
 return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
  console.log('insdie upate action', action)
  return fetchAPI(new Date(action.date));
};

function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const submitForm = (e) => {
      e.preventDefault();
      const formData = { date, time , guests, occasion};
      const submitResult = submitAPI(formData);
      if(submitResult) {
        navigate('/booking-success');
      }
  }

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <Header></Header>
      <main className="flex-column align-items-center">
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          availableTimes={availableTimes}
          dispatchTimes={dispatchTimes}
          setOccasion={setOccasion}
          handleSubmit={submitForm}
        />
      </main>
      <Footer></Footer>
    </>
  );
}
export default BookingPage;
export {initializeTimes, updateTimes};
