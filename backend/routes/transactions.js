const router = require("express").Router();

// Income controller
const {
  addIncome,
  getIncomes,
  deleteIncomes,
} = require("../controllers/income.js");

// Expense controller
const {
  addExpense,
  getExpenses,
  deleteExpenses,
} = require("../controllers/expense.js");

// Income routes
router.post("/add-income", addIncome);
router.get("/get-incomes", getIncomes);
router.delete("/delete-incomes/:id", deleteIncomes);

// Expense routes
router.post("/add-expense", addExpense);
router.get("/get-expenses", getExpenses);
router.delete("/delete-expenses/:id", deleteExpenses);

module.exports = router;
