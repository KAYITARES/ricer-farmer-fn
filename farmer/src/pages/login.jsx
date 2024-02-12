import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Navbar from '../component/header';

const Login = () => {
  const [logindata, setlogindata] = useState({
    email: '',
    password: '',
  });

  const [userrole, setuserrole] = useState(null);

  const HandleInputLogin = (e) => {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = 'http://localhost:3504/groupe/user/login';
      const response = await axios.post(api, logindata);
      const { token } = response.data;
      localStorage.setItem('auth-token', token);

      // Decode the token to get user information, including the role
      const decodedToken = jwtDecode(token);
      setuserrole(decodedToken.user.role);

      console.log('Login successful', response.data);

      // Move the role-checking logic inside the setuserrole callback
      setuserrole((prevUserRole) => {
        if (prevUserRole === "admin") {
          alert("Welcome to the admin page");
          window.location.href = "/dashboard";
        } else if (prevUserRole === "member") {
          alert("Welcome to the member page");
          window.location.href = "/memberboard";
        } else {
          alert("Welcome to the user page");
        }
        return prevUserRole;
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login form </h1>
          <label>
            User email:
            <input type="email" onChange={HandleInputLogin} value={logindata.email} name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" onChange={HandleInputLogin} value={logindata.password} name="password" />
          </label>
          <br />
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
