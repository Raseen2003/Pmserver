const products = require('../models/productsModel');

// Add products
exports.addProductsController = async (req, res) => {
  console.log("inside product controller");
  const { name, description, amount, category } = req.body;
  const image = req.file.filename;

  try {
    const newProduct = new products({
      name,
      description,
      amount,
      category,
      image,
    });
    
    await newProduct.save();
    console.log("product added successfully");
    res.status(200).json({ newProduct });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "internal server error" });
  }
};

// Get all products
exports.getAllProductsController = async (req, res) => {
  console.log("inside get all products controller");
  try {
    const allProducts = await products.find();
    res.status(200).json({ allProducts });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Update product
exports.updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, description, amount, category, image } = req.body;

  try {
    const updatedProduct = await products.findByIdAndUpdate(
      id,
      { name, description, amount, category, image },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete product
exports.deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await products.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};