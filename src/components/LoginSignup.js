import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function LoginSignup() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedIn = login(formData.username, formData.password);

    if (loggedIn) {
      navigate('/events');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-12">
      <h2 className="text-xl font-semibold mb-4 text-center">Eventopia - Find Your Next Great Experience!</h2>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label className="block mb-1">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <button type="submit" className="py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginSignup;
