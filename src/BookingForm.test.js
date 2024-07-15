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

test('form submission calls handleSubmit with correct values', async() => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const dispatchTimes = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(<BookingForm
        setDate={setDate}
        setTime={setTime}
        setGuests={setGuests}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        handleSubmit={handleSubmit}
    />);

    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });
    fireEvent.submit(screen.getByRole('form', { hidden: true }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);


    const event = handleSubmit.mock.calls[0][0];
    expect(event.preventDefault).toBeInstanceOf(Function);

    const formElements = event.target.elements;
    expect(formElements['res-date'].value).toBe('2024-07-15');
    expect(formElements['res-time'].value).toBe('18:00');
    expect(formElements['guests'].value).toBe('3');
    expect(formElements['occasion'].value).toBe('Anniversary');
  });

  test('form submission with empty date will not trigger submit', () => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const dispatchTimes = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(<BookingForm
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
    expect(screen.getByLabelText('Choose date')).toBeRequired();
    expect(screen.getByLabelText('Choose time')).toBeRequired();
    expect(screen.getByLabelText('Number of guests')).toBeRequired();
    expect(screen.getByLabelText('Occasion')).toBeRequired();
  });


  test('form with empty values will have form submit disabled', () => {
    const handleSubmit = jest.fn();
    const setDate = jest.fn();
    const setTime = jest.fn();
    const setGuests = jest.fn();
    const setOccasion = jest.fn();
    const dispatchTimes = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(<BookingForm
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
    const submitBtn = screen.getByText("Make your reservation");
    expect(submitBtn).toBeDisabled();
  });