Event Booking System
Overview

React application for browsing and booking events.
Displays event details and enables ticket booking.
Features
Event Listing: Title, description, category, date, available seats, and price.
Search & Filter: Filter events by category; search by title.
Event Details: Click to view more details on a separate page.
Booking Tickets: Users can book tickets if seats are available.
Pagination: Paginated event listings for easier navigation.
Authentication: Users must log in to book tickets.
Technologies Used
React: Frontend framework.
React Hooks: For state management (useState, useEffect).
CSS: For styling (consider Tailwind CSS).
Context API: For user authentication sessions.
Mock API / Static JSON: Simulated data fetching.
Getting Started
Clone the Repo: git clone https://github.com/yourusername/event-booking-system.git
Navigate: cd event-booking-system
Install Dependencies: npm install
Start Server: npm start
Open in Browser: Visit http://localhost:3000.
State Management
Uses React hooks for component-level state.
Designed for potential future Redux integration.
Data Fetching
Simulates fetching with a mock API/static JSON.
Shows loading state during data fetching.
Provides user-friendly error handling.
Event Booking Logic
Decreases available seats when "Book Ticket" is clicked.
Displays a message if the event is fully booked.
Additional Features
Pagination: Efficiently renders events using useMemo.
Authentication: Simple mock system with Context API.
Responsive Design: Optimized for various screen sizes.
