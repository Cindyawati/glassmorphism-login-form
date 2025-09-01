import React from "react";
import { useState } from "react";
import "./GlassmorphismStyle.css";

function Glassmorphism() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="body">
      <section className="section">
        <div className="color">Pink</div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="square --i,1"></div>
          <div className="square --i,2"></div>
          <div className="square --i,3"></div>
          <div className="square --i,4"></div>
          <div className="container">
            <div className="form">
              <h2>Login Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className="inputBox">
                  <input type="submit" />
                </div>
                <p className="forget">
                  Forgot Password? <a href="#">Click Here</a>
                </p>
                <p className="forget">
                  Don't have an account? <a href="#">Click Here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Glassmorphism;
