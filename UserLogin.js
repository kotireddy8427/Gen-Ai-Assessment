import React, { useState } from "react";
import axios from "axios";
import "./UserLogin.css";

// API base URL from environment variable
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/users";

const UserLogin = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  // State for API responses, errors, and loading
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validate inputs before API calls
  const validateInputs = (checkEmail = false) => {
    if (!username || !password) return "Username and password are required.";
    if (checkEmail && email) {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email)) return "Invalid email format.";
    }
    return null;
  };

  // GET: Fetch all users
  const handleGet = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await axios.get(API_URL);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  // POST: Login/Create user
  const handlePost = async () => {
    const validationError = validateInputs(true);
    if (validationError) return setError(validationError);
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await axios.post(API_URL, { username, password, email });
      setResponse(res.data);
    } catch (err) {
      setError(
        err.response?.data?.errors?.join(", ") ||
          err.response?.data?.message ||
          "Error creating user"
      );
    } finally {
      setLoading(false);
    }
  };

  // PUT: Update user
  const handlePut = async () => {
    if (!userId) return setError("User ID is required for update.");
    const validationError = validateInputs(true);
    if (validationError) return setError(validationError);
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await axios.put(`${API_URL}/${userId}`, {
        username,
        password,
        email,
      });
      setResponse(res.data);
    } catch (err) {
      setError(
        err.response?.data?.errors?.join(", ") ||
          err.response?.data?.message ||
          "Error updating user"
      );
    } finally {
      setLoading(false);
    }
  };

  // DELETE: Delete user
  const handleDelete = async () => {
    if (!userId) return setError("User ID is required for delete.");
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await axios.delete(`${API_URL}/${userId}`);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-login-container">
      <h2>User Login</h2>
      <form className="user-login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="User ID (for update/delete)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <div className="button-group">
          {/* GET: Fetch users */}
          <button type="button" onClick={handleGet} disabled={loading}>
            GET Users
          </button>
          {/* POST: Login/Create user */}
          <button type="button" onClick={handlePost} disabled={loading}>
            POST Login/Create
          </button>
          {/* PUT: Update user */}
          <button type="button" onClick={handlePut} disabled={loading}>
            PUT Update
          </button>
          {/* DELETE: Delete user */}
          <button type="button" onClick={handleDelete} disabled={loading}>
            DELETE User
          </button>
        </div>
      </form>
      {/* Display loading, response, or error */}
      {loading && <div className="loading">Loading...</div>}
      {response && (
        <div className="response">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default UserLogin;
