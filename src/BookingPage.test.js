import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes returns a array based on that date", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
});

test("for now updateTimes update state will always return 5 states", () => {
  const initialState = ["17:00", "17:30", "18:00", "20:00", "21:00", "23:30"];
  const action = { date: "2024-07-01" };
  const updatedTimes = updateTimes(initialState, action);
  expect(updatedTimes).toEqual(initialState);
});
