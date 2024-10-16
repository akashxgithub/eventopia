import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { events as initialEvents } from '../data/events'; 
import { AuthContext } from './AuthContext';

function EventDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext); 
  const [eventData, setEventData] = useState(initialEvents);
  const event = eventData.find(event => event.id === parseInt(id)); 
  const [isBooked, setIsBooked] = useState(false);
  const [bookingError, setBookingError] = useState('');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEventData(storedEvents);
    }
  }, []);

  const handleBookTicket = () => {
    if (!user) {
      setBookingError('You must be logged in to book tickets.');
      return; 
    }
    
    if (event.availableSeats > 0) {
      const updatedEvents = eventData.map(e => 
        e.id === event.id ? { ...e, availableSeats: e.availableSeats - 1 } : e
      );

      
      setEventData(updatedEvents);
      
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setIsBooked(true);
      setBookingError('');
    } else {
      setBookingError('This event is fully booked!');
    }
  };

  if (!event) {
    return <div className="text-center text-lg text-red-500">Event not found</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <p className="text-lg text-gray-700 mb-2">{event.description}</p>
      <p className="text-md text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
      <p className="text-md text-gray-600 mb-2"><strong>Available Seats:</strong> {event.availableSeats}</p>
      <p className="text-md text-gray-600 mb-4"><strong>Price:</strong> ₹{event.price} onwards</p>
      <button 
        onClick={handleBookTicket} 
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Book Ticket
      </button>
      {isBooked && <p className="mt-2 text-green-500">Ticket booked successfully!</p>}
      {bookingError && <p className="mt-2 text-red-500">{bookingError}</p>}
    </div>
  );
}

export default EventDetails;
