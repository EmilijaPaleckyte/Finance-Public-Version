import React, { useState } from "react";

import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png";
import { isAuthenticated } from "../../utils/auth";
import styled from "styled-components";

function Navigation({ active, setActive }) {
  // eslint-disable-next-line no-unused-vars
  const [isLoginModalOpen] = useState(false);

  const user = isAuthenticated()
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  return (
    <NavStyled>
      {user ? (
        <div className="user-con">
          <img src={avatar} alt="User Avatar" />
          <div className="text">
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        <Link to="/login">
          {/* <WhiteBtn>Log in</WhiteBtn> */}
        </Link>
      )}
      <div className="menu-items">
        <Link to="/" className={`menu-item ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
          <li>Dashboard</li>
        </Link>
        <Link to="/income" className={`menu-item ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>
          <li>Income</li>
        </Link>
        <Link to="/expenses" className={`menu-item ${active === 4 ? 'active' : ''}`} onClick={() => setActive(4)}>
          <li>Expenses</li>
        </Link>
        {user && (
          <Link to="/logout" className={`menu-item ${active === 7 ? 'active' : ''}`} onClick={() => setActive(7)}>
            <li>Log Out</li>
          </Link>
        )}
        {!user && (
          <>
            <Link to="/signup" className={`menu-item ${active === 5 ? 'active' : ''}`} onClick={() => setActive(5)}>
              <li>Sign Up</li>
            </Link>
            <Link to="/login" className={`menu-item ${active === 6 ? 'active' : ''}`} onClick={() => setActive(6)}>
              <li>Log In</li>
            </Link>
          </>
        )}
      </div>
    </NavStyled>
  );
}

// eslint-disable-next-line no-unused-vars
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
`;

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  /* Media Queries */
  @media only screen and (max-width: 576px) {
    max-width: 100%;
    border-radius: 16px;
    padding: 1.5rem;
  }
`;

export default Navigation;
