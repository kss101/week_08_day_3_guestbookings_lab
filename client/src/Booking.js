import BookingService from "./BookingService";

const Booking = ({booking, removeBooking}) => {
    console.log(booking);

    const handleDelete = () => {
        BookingService.deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id);
        })
    }

    return (
        <>
        <h1>{booking.name}</h1>
        <p>{booking.email}</p>
        <p>{booking.checkedIn}</p>
        <button onClick={handleDelete}> Delete ❌</button>
        </>
    )


}

    
export default Booking;