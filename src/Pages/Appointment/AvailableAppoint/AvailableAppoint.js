import { Alert, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 50,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 50,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 50,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 50,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 50,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 50,
        space: 10,
    },
]

const AvailableAppoint = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Typography sx={{ color: 'info.main', mb: 4 }} variant="h4">Available Appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                        date={date}>
                    </Booking>)
                }
            </Grid>
        </div>
    );
};

export default AvailableAppoint;