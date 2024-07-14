
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

test('initializeTimes returns the default array with 5 states', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });

  test('for now updateTimes update state will always return 5 states', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = { date: '22:00' };
    const updatedTimes = updateTimes(initialState, action);
    expect(updatedTimes).toEqual(initialState);
  });