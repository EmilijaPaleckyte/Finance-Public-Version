const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  // Information to send
  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    // Validation
    if (!title || !category || !description || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ error: "Amount must be a positive number" });
    }
    await income.save();
    res.status(200).json({ message: "Expense has been added" });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).json({ error: "Error has occurred while saving the data" });
  }
  // Should already show up in db, when send for exp through Postman
  // - As we're saving data
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return res.status(500).json({ error: "Error fetching expenses" });
  }
};

exports.deleteExpenses = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    return res.status(200).json({ message: "Expense has been deleted" });
  } catch (error) {
    console.error("Error deleting expense:", error);
    return res.status(500).json({ error: "Error deleting expense" });
  }
};
