const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  // Information to send
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    // Validation
    if (!title || !amount || !category || !description || !date) {
      // console.log(title);
      return res.status(400).json({ error: "All fields are required" });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ error: "Amount must be a positive number" });
    }
    await income.save();
    res.status(200).json({ message: "Income has been added" });
  } catch (error) {
    console.error("Error adding income:", error);
    res.status(500).json({ error: "Error has occurred while saving the data" });
  }
  // Should already show up in db, when send fexp through Postman
  // - As we're saving data
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    // Recent on top
    return res.status(200).json(incomes);
  } catch (error) {
    console.error("Error fetching incomes:", error);
    return res.status(500).json({ error: "Error fetching incomes" });
  }
};

exports.deleteIncomes = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
    if (!deletedIncome) {
      return res.status(404).json({ message: "Income not found" });
    }
    return res.status(200).json({ message: "Income has been deleted" });
  } catch (error) {
    console.error("Error deleting income:", error);
    return res.status(500).json({ error: "Error deleting income" });
  }
};
