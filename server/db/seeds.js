use hotel_bookings;
db.dropDatabase();


db.bookings.insertMany([
    {
        name: "Kurt Steffan",
        email: "Kurt@gmail.com",
        checkedIn: false 
    }, 
    {
        name: "Kirsten Nicholson",
        email: "Kirsten@gmail.com",
        checkedIn: false 
    }, 

]);