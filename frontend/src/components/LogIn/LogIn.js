import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/v1/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      // Stores user details
      localStorage.setItem("user", JSON.stringify(res.data.user)); // User details are in res.data.user
      navigate("/"); // Navigates to desired route after login
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <LoginContainer>
      <LoginFormContainer>
        <Left>
          <form onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <GreenBtn type="submit">Sign In</GreenBtn>
          </form>
        </Left>
        <Right>
          <h1>New Here?</h1>
          <Link to="/signup">
            <WhiteBtn>Sign Up</WhiteBtn>
          </Link>
        </Right>
      </LoginFormContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px;
  margin-bottom: 55px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 80%;
  max-width: 370px;
  padding: 15px;
  border-radius: 10px;
  background-color: #edf5f3;
  margin: 5px 0;
  font-size: 14px;
`;

const ErrorMsg = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #f34646;
  color: white;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
`;

const WhiteBtn = styled.button`
  border: none;
  outline: none;
  padding: 12px 0;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin: 15px;
`;

const GreenBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  outline: none;
  padding: 12px 0;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

export default Login;
