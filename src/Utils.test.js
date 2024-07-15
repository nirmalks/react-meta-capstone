import { isBookingFormValid } from "./Utils";

test('returns true if all the fields passed are valid', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 1;
    const occasion = 'Anniversary';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(true);
});

test('guests with value as 10 will return true', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 10;
    const occasion = 'Anniversary';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(true);
});

test('guests with value 0 will return false', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 0;
    const occasion = 'Anniversary';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});

test('guests with value 11 will return false', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 0;
    const occasion = 'Anniversary';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});

test('occasion with value birthday will return true', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 1;
    const occasion = 'Birthday';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(true);
});

test('occasion with invalid value other than bday or anniversary will return false', ()=>  {
    const date = '2024-07-15';
    const time = '17:00';
    const guests = 1;
    const occasion = 'Bir';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});

test('empty date will return false', ()=>  {
    const date = '';
    const time = '17:00';
    const guests = 1;
    const occasion = 'Birthday';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});

test('past date will return false', ()=>  {
    const date = '2024-06-15';
    const time = '17:00';
    const guests = 1;
    const occasion = 'Birthday';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});

test('empty time will return false', ()=>  {
    const date = '2024-07-15';
    const time = '';
    const guests = 1;
    const occasion = 'Birthday';
    expect(isBookingFormValid(date, time, guests, occasion)).toBe(false);
});