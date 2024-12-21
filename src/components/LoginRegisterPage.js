import React, { useState } from "react";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  };

  const formContainerStyle = {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.2rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    margin: "12px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
  };

  const passwordToggleStyle = {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    color: "#6e8efb",
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.85rem",
    textAlign: "left",
    marginTop: "-5px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    margin: "15px 0",
    border: "none",
    borderRadius: "8px",
    background: "#6e8efb",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const toggleLinkStyle = {
    color: "#6e8efb",
    cursor: "pointer",
    marginTop: "10px",
    display: "block",
    fontSize: "0.9rem",
  };

  const socialLoginStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  };

  const socialButtonStyle = {
    flex: "1",
    margin: "0 5px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    fontSize: "0.9rem",
    cursor: "pointer",
  };

  const validateForm = () => {
    const newErrors = {};
    if (!isLogin && !formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!isLogin) {
      if (!formData.mobile) {
        newErrors.mobile = "Mobile number is required";
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        newErrors.mobile = "Enter a valid 10-digit mobile number";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      alert(`${isLogin ? "Login" : "Registration"} successful!`);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                style={inputStyle}
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={inputStyle}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
          {!isLogin && (
            <>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                style={inputStyle}
                value={formData.mobile}
                onChange={handleInputChange}
              />
              {errors.mobile && <p style={errorStyle}>{errors.mobile}</p>}
            </>
          )}

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              style={inputStyle}
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              style={passwordToggleStyle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p style={errorStyle}>{errors.password}</p>}

          {!isLogin && (
            <>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                style={inputStyle}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <p style={errorStyle}>{errors.confirmPassword}</p>
              )}
            </>
          )}

          <button style={buttonStyle}>{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <span
          style={toggleLinkStyle}
          onClick={() => {
            setIsLogin(!isLogin);
            setFormData({
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
              mobile: "",
            });
            setErrors({});
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </span>

        <div style={socialLoginStyle}>
          <button style={{ ...socialButtonStyle, background: "#DB4437" }}>
            Google
          </button>
          <button style={{ ...socialButtonStyle, background: "#4267B2" }}>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
