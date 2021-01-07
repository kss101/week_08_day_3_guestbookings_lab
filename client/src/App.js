import {useState, useEffect} from "react";
import './App.css';
import BookingService from "./BookingService";
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";


function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    BookingService.getBookings()
    .then((allBookings) => {
      setBookings(allBookings);
    })
  }, [])

  const addBooking = (booking) => {
    const makeBooking = bookings.map(reservation => reservation);
    makeBooking.push(booking);
    setBookings(makeBooking);
  }

  const deleteBooking = (id) => {
    const removeBooking = bookings.map(reservation => reservation);
    const bookingToDelete = removeBooking.map(reservation => reservation._id).indexOf(id);
    console.log(bookingToDelete);

    removeBooking.splice(bookingToDelete, 1);
    setBookings(removeBooking);
  }

  return (
    <>
   <h1> Test</h1>
    <BookingForm addBooking ={addBooking} />
    <BookingList bookings = {bookings} removeBooking = {deleteBooking}/>
    
   </>
  );
}

export default App;
