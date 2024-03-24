import React, { useContext, useState } from "react";

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    let response;
    try {
      response = await axios.post(`${BASE_URL}add-income`, income);
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || "Unknown error occurred";
    }
  };

  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      if (response && response.data) {
        setIncomes(response.data);
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Unknown error occurred");
    }
  };

  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-incomes/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || "Unknown error occurred";
    }
  };

  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => {
      total += income.amount;
    });
    return total;
  };
  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, expense);
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || "Unknown error occurred";
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      if (response && response.data) {
        setExpenses(response.data);
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Unknown error occurred");
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-expenses/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data?.error || "Unknown error occurred";
    }
  };

  const totalExpenses = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
