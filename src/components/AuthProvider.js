

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Login from './components/Login';
import EventList from './components/EventList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/events"
            element={
              <PrivateRoute>
                <EventList />
              </PrivateRoute>
            }
          />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
