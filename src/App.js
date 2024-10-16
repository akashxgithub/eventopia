import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import LoginSignup from './components/LoginSignup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/events" element={<ProtectedRoute><EventList /></ProtectedRoute>} />
        <Route path="/events/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
