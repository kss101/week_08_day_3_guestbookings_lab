import {useState} from "react";
import BookingService from "./BookingService";

const BookingForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) => { //e = event
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        BookingService.postBooking(formData)
        .then(() => {
            addBooking(formData);
        })
    }


    return(
        <form onSubmit={onSubmit} id="booking-form">
            <h2>Add New Booking</h2>
            <div>
                <label for = "name"> Name: </label>
                <input onChange={onChange} type="text" id="name" required ></input>
                
                <label for = "email"> Email Address: </label>
                <input onChange={onChange} type="text" id="email" required></input>
            
                <label for = "checkIn"> Checked In Yet?: </label>
                <input onChange={onChange} type="text" id="checkIn" required></input>

                <input type= "submit" value= "Save" id="save"/>
            </div> 
        </form>
    );
}

export default BookingForm;