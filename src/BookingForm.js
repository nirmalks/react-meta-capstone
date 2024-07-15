import { isBookingFormValid } from "./Utils";
function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  handleSubmit,
  availableTimes,
  dispatchTimes,
}) {
  const isFormValid = isBookingFormValid(date, time, guests, occasion);
  return (
    <>
      <h2>Reserve a Table</h2>
      <form
        className="form-grid"
        name="booking-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          onChange={(e) => {
            setDate(e.target.value);
            dispatchTimes({ date: e.target.value });
          }}
          value={date}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required
          onChange={(e) => setTime(e.target.value)}
          value={time}
        >
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          required
          id="guests"
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => setOccasion(e.target.value)}
          value={occasion}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          className="primary-btn span-2-columns"
          value="Make your reservation"
          disabled={!isFormValid}
        />
      </form>
    </>
  );
}

export default BookingForm;