import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();


const staticUsers = [
  { username: 'testuser', password: 'password123' },
  { username: 'admin', password: 'admin123' }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    const matchedUser = staticUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      return true; 
    }
    return false; 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
