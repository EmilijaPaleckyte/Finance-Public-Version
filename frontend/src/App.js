import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Income from "./components/Income/Income";
import Login from "./components/LogIn/LogIn";
import Main from "./components/LogOut/LogOut";
import { MainLayout } from "./styles/Layouts";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./components/SignUp/SignUp";
import bg from "./img/bg.png";
import styled from "styled-components";

function App() {
  const [active, setActive] = useState(1);

  return (
    <Router>
      <AppStyled bg={bg}>
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Main />} />
            </Routes>
          </main>
        </MainLayout>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    main {
      border-radius: 20px;
    }
  }

  @media only screen and (max-width: 576px) {
    main {
      border-radius: 16px;
      border-width: 2px;
    }
  }
`;

export default App;
