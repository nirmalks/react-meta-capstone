import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState } from "react";
function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(date)
      console.log(time)
      console.log(guests)
      console.log(occasion)
      console.log('form submitted')
  }


  return (
    <>
      <Header></Header>
      <main>
        <h2>Reserve a Table</h2>
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          availableTimes={availableTimes}
          setOccasion={setOccasion}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer></Footer>
    </>
  );
}
export default BookingPage;
