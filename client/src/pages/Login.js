import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { toast } from "react-toastify";
import { FaUser, FaLock } from "react-icons/fa";
import Spinner from "../components/shared/Spinner";
import "../styles/Login.css"; // Import the new CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const { data } = await axios.post("/api/v1/auth/login", { email, password });
      if (data.success) {
        dispatch(hideLoading());
        localStorage.setItem("token", data.token);
        toast.success("Login Successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Credentials, please try again!");
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="login-container">
          <form className="login-card" onSubmit={handleSubmit}>
            <img src="/assets/images/logo/logo.png" alt="logo" className="logo" />
            <h2>Login</h2>
            <div className="input-group">
              <FaUser className="icon" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn">Login</button>
            <p className="register-link">
              Not a user? <Link to="/register">Register Here!</Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
