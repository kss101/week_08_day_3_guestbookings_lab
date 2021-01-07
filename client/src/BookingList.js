import Booking from "./Booking.js";

const BookingsList = ({bookings, removeBooking}) => {
    const hotelBookings = bookings.map((booking)=> {
        return < Booking booking={booking} removeBooking={removeBooking} />
    });

    return (
        <>
        {hotelBookings}
        </>
    );
}

export default BookingsList;