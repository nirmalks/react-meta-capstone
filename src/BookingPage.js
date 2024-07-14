import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];
const updateTimes = (state, action) => {
  console.log('insdie upate tiem', state)
  console.log('insdie upate action', action)
  return initializeTimes();
};

function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(date)
      console.log(time)
      console.log(guests)
      console.log(occasion)
      console.log('form submitted')
  }

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <Header></Header>
      <main>
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
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer></Footer>
    </>
  );
}
export default BookingPage;
export {initializeTimes, updateTimes};
