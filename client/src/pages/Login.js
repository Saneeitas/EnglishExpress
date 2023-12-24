import React from "react";
import "../css/form.css";

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
   
  };

  return (
    <div
      style={{
        backgroundColor: "#7b3aed",
        height: "100%",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
      }}
    >
      <div className="mt-5">
        <h2 className="main-heading">English Express</h2>
        <div className="container mt-5 mb-lg-5 mb-0">
          <div className="form-container" id="login-form">
            <h2 className="text-center">Log In</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="right-inner-addon input-container">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control"
                    style={{ boxShadow: "none", background: "#f4f7ff" }}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  style={{ boxShadow: "none", background: "#f4f7ff" }}
                  placeholder="Password"
                  value=""
                />
                <i className="toggle-password fa fa-fw fa-eye-slash"></i>
              </div>
              <div className="form-check mt-5">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  style={{ boxShadow: "none", marginTop: "5px" }}
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    color: "rgba(31, 31, 31, 0.76)",
                  }}
                >
                  Remember me
                </label>
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  style={{
                    fontSize: "18px",
                    backgroundColor: "#7b3aed",
                    border: "none",
                    padding: "5px 100px 5px 100px",
                    color: "white",
                    borderRadius: "7px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="text-center mt-2">
            <a
              href="\signup"
              style={{
                color: "#7b3aed",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Forget Password?
            </a>
          </div>
          <div className="text-center mt-5">
            <label
              htmlFor=""
              className="mt-5"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "15px",
                color: "#000000",
              }}
            >
              Not a member yet?{" "}
              <a href="\signup" style={{ color: "#7b3aed", fontSize: "15px" }}>
                Sign up here!
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
