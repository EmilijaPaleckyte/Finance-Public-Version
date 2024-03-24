import React, { useState } from "react";

import styled from "styled-components";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div>
      <Navbar>
        {loggedIn ? (
          <WhiteBtn onClick={handleLogout}>Log Out</WhiteBtn>
        ) : (
          <div>
            <h2>Goodbye!</h2>
            <p>We'll miss you!</p>
          </div>
        )}
      </Navbar>
    </div>
  );
};

const Navbar = styled.nav`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const WhiteBtn = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: white;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  color: var(--primary-color);
`;

export default Main;
