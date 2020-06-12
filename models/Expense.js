var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin-atul:ps7QWtTA7FZJBAy3@cluster0-i63yk.mongodb.net/bugdb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number,
});
// const Expense = mongoose.model("Expense", expenseSchema);
// new Expense({
//   description: "dsdsd",
//   amount: 1213,
// }).save();

module.exports = mongoose.model("Expense", expenseSchema);
