function validateDate(date) {
    if (!date) {
      return false;
    }
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return selectedDate >= today;
  }

function isValidGuests(guests) {
    return guests > 0 && guests <= 10;
}

function isValidOccasion(occasion) {
    return occasion === "Birthday" || occasion === "Anniversary";
}
export function isBookingFormValid(date, time, guests, occasion) {
    console.log('date:', date);
    console.log('time:', time);
    console.log('guests:', guests);
    console.log('occasion:', occasion);
    console.log('isValidGuests:', isValidGuests(guests));
    console.log('isValidOccasion:', isValidOccasion(occasion));
    console.log('valid date', validateDate(date))
    console.log('res', validateDate(date) && time && isValidGuests(guests) && isValidOccasion(occasion))
    return validateDate(date) && time && isValidGuests(guests) && isValidOccasion(occasion);
}
