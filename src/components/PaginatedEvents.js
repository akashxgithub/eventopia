import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

function PaginatedEvents({ events, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return events.slice(start, start + itemsPerPage);
  }, [currentPage, events, itemsPerPage]);

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedEvents.map(event => (
          <li key={event.id} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl p-4">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-gray-500">Date: {event.date}</p>
            <p className="text-gray-700 font-bold">Price: ₹{event.price} onwards</p>
            <Link 
              to={`/events/${event.id}`} 
              className="mt-3 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>

      
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedEvents;
