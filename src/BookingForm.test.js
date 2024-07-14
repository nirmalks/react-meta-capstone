import { render, screen,fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm button', () => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(       <BookingForm
        date=""
        setDate={setDate}
        time="17:00"
        setTime={setTime}
        guests="1"
        setGuests={setGuests}
        occasion="Birthday"
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        handleSubmit={handleSubmit}
    />);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the reserve a table heading', () => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(       <BookingForm
        date=""
        setDate={setDate}
        time="17:00"
        setTime={setTime}
        guests="1"
        setGuests={setGuests}
        occasion="Birthday"
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        handleSubmit={handleSubmit}
    />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('form submission calls handleSubmit with correct values', () => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const dispatchTimes = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(       <BookingForm
        date=""
        setDate={setDate}
        time="17:00"
        setTime={setTime}
        guests="1"
        setGuests={setGuests}
        occasion="Birthday"
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        handleSubmit={handleSubmit}
    />);
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });
    fireEvent.click(screen.getByText('Make your reservation'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
      preventDefault: expect.any(Function),
    }));
  });