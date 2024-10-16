import React, { useState, useEffect } from 'react';
import PaginatedEvents from './PaginatedEvents';
import { events } from '../data/events';

function EventList() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(''); 
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    setTimeout(() => {
      setEventData(events); 
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="text-center">Loading events...</div>;

  
  const filteredEvents = eventData.filter(event => {
    const matchesCategory = filter === '' || event.category === filter; 
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()); 
    return matchesCategory && matchesSearch;
  });

  console.log("Filtered Events: ", filteredEvents); 

  // Items per page
  const itemsPerPage = 6;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">The Best Of Live Events</h1>
      
      <input
        type="text"
        placeholder="Search for events"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        className="border p-2 rounded w-full mb-4"
      />
      
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded mb-4">
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Comedy">Comedy</option>
        <option value="Food">Food</option>
        <option value="Art">Art</option>
        <option value="Literature">Literature</option>
        <option value="Family">Family</option>
      </select>

      {filteredEvents.length > 0 ? (
        <PaginatedEvents events={filteredEvents} itemsPerPage={itemsPerPage} />
      ) : (
        <div className="text-center">No events found.</div>
      )}
    </div>
  );
}

export default EventList;
