import React, { useEffect, useState } from "react";

import Chart from "../Chart/Chart";
import Expenses from "../Expenses/Expenses";
import History from "../History/History";
import Income from "../Income/Income";
import { InnerLayout } from "../../styles/Layouts";
import Login from "../LogIn/LogIn";
import Main from "../LogOut/LogOut";
import Signup from "../SignUp/SignUp";
import dollar from "../IncomeItem/IncomeItem";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function Dashboard() {

  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);


  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Signup />;
      case 6:
        return <Login />;
      case 7:
        return <Main />;
      default:
        return <Dashboard />;
    }
  };

  const {
    totalExpenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
      <DashboardStyled>
        <InnerLayout>
          <h1>All Transactions</h1>
          <Chart />
          <div className="stats-con">
            <div className="chart-con">
              <div className="amount-con">
                <div className="income">
                  <h2>Total Income</h2>
                  <p>
                    {dollar} ${totalIncome()}
                  </p>
                </div>
                <div className="expense">
                  <h2>Total Expense</h2>
                  <p>
                    {dollar} ${totalExpenses()}
                  </p>
                </div>
                <div className="balance">
                  <h2>Total Balance</h2>
                  <p>
                    {dollar} ${totalBalance()}
                  </p>
                </div>
              </div>
            </div>
            <div className="history-con">
              <History />
              <h2 className="salary-title">
                Min<span>Salary</span>Max
              </h2>
              <div className="salary-item">
                <p>
                  {Array.isArray(incomes) && incomes.length > 0
                    ? "$" + Math.min(...incomes.map((item) => item.amount))
                    : "$0"}
                </p>
                <p>
                  {Array.isArray(incomes) && incomes.length > 0
                    ? "$" + Math.max(...incomes.map((item) => item.amount))
                    : "$0"}
                </p>
              </div>
              <h2 className="salary-title">
                Min<span>Expense</span>Max
              </h2>
              <div className="salary-item">
                <p>
                  {Array.isArray(expenses) && expenses.length > 0
                    ? "$" + Math.min(...expenses.map((item) => item.amount))
                    : "$0"}
                </p>
                <p>
                  {Array.isArray(expenses) && expenses.length > 0
                    ? "$" + Math.max(...expenses.map((item) => item.amount))
                    : "$0"}
                </p>
              </div>
            </div>
          </div>
        </InnerLayout>
      </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    .chart-con {
      grid-column: 1 / 4;
      height: 400px;

      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;

        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;

          p {
            font-size: 3.5vw;
            font-weight: 700;
            word-wrap: break-word;
          }
        }

        .income,
        .expense {
          grid-column: span 2;
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3.5vw;
            word-wrap: break-word;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;

      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .salary-title {
        font-size: 1.2rem;

        span {
          font-size: 1.8rem;
        }
      }

      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 600;
          font-size: 1.6vw;
          word-wrap: break-word;
        }
      }
    }
  }

  /* Media Queries */
  @media only screen and (max-width: 992px) {
    .stats-con {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      .chart-con {
        grid-column: auto;
        height: auto;
        margin-bottom: 2rem;
      }

      .history-con {
        grid-column: auto;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .stats-con {
      grid-template-columns: 1fr;
      gap: 1rem;

      .chart-con,
      .history-con {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Dashboard;