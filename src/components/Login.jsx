import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
const Login = ({ role,setRole }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async () => {
    try {
      console.log({ username, password, role });
      const res = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
        role,
      });

      if (res.data.login && res.data.role === "admin") {
        setRole("admin");
        navigate("/dashboard");
      } else if (res.data.login && res.data.role === "student") {
        setRole("student");
        navigate("/");
      } else {
        console.log("Invalid login data received:", res.data);
      }
    } catch (error) {
      console.error("Error during login request:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => {console.log(role);setRole(e.target.value)}}
           
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  setRole: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

export default Login;
