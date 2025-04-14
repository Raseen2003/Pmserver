const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  amount: String,
  category: String,
  
  image: String, // for uploaded file name
});

module.exports = mongoose.model("Product", productSchema);
