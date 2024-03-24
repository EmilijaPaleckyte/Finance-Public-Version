import React, { useEffect } from "react";

import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem.js";
import { InnerLayout } from "../../styles/Layouts";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  //re-renders when incomes change
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  .total-income {
    flex: 1;
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
      color: var(--color-green);
    }
  }

  .income-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .incomes {
      flex: 1;
    }
  }

  /* Media Queries */
  @media only screen and (max-width: 576px) {
    flex-direction: column;

    .income-content {
      flex-direction: column;
      gap: 1.5rem;
    }

    .total-income {
      margin: 0.5rem 0;
      font-size: 1.5rem;

      span {
        font-size: 2rem;
      }
    }
  }
`;

export default Income;
