Overview
The Event Booking System is a React application that allows users to browse and book tickets for various events. Users can view event details, filter events by category, and search for specific events by title. The app ensures a smooth user experience through responsive design and effective state management.

Features
Event Listing: Displays a list of events with details such as:

Title
Description
Category
Date
Available Seats
Price
Search and Filter: Users can filter events by category and search for specific events by title.

Event Details: Clicking on an event provides more detailed information on a separate page.

Booking Tickets: Users can book tickets for events if seats are available.

Pagination: The events list is paginated for better navigation.

Authentication: Users must log in to book tickets.

Technologies Used
React: For building the user interface.
React Hooks: For state management (e.g., useState, useEffect).
CSS: For styling the application (consider using Tailwind CSS for utility-first styling).
Context API: For handling user authentication sessions.
Mock API / Static JSON: To simulate data fetching.
Getting Started
Prerequisites
Ensure you have Node.js installed on your machine.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/event-booking-system.git
Navigate to the project directory:

bash
Copy code
cd event-booking-system
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to see the app in action.

State Management
The application uses React hooks for managing state at the component level. While the current implementation is sufficient for the existing features, the architecture is designed to be scalable for future integration of a global state management solution, such as Redux.

Data Fetching
The app simulates data fetching using a mock API or static JSON data. Key points include:

A loading state is displayed while fetching data.
User-friendly error handling is implemented to notify users of any data fetching failures.
Event Booking Logic
When a user clicks the "Book Ticket" button, the number of available seats for that event is reduced by 1.
If no seats are available, a message is displayed indicating that the event is fully booked.
Additional Features
Pagination: Implemented using the useMemo hook for efficient rendering of the events list.
Authentication: A simple mock authentication system is included, utilizing a static users list and Context API for session handling.
Responsive Design: The application is designed to be responsive across different screen sizes, ensuring a seamless experience on both desktop and mobile devices.
