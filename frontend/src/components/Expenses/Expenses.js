import React, { useEffect } from "react";

import ExpenseForm from "../Form/expenseForm";
import IncomeItem from "../IncomeItem/IncomeItem.js";
import { InnerLayout } from "../../styles/Layouts";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  //re-renders when expenses change
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-expense">
          Total Expense: <span>-${totalExpenses()}</span>
        </h2>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((expenses) => {
              const { _id, title, amount, date, category, description, type } =
                expenses;
              // props
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-delete)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow-x: auto;

  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }

  .expense-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .incomes {
      flex: 1;
    }
  }

  /* Media Queries */
  @media (max-width: 576px) {
    .expense-content {
      flex-direction: column;
      align-items: center;

      .incomes {
        width: 100%;
      }
    }
  }
`;

export default Expenses;
