const products = require('../models/productsModel');

// add products 
exports.addProductsController = async (req, res) => {
    console.log("inside product controller");
    const { name, description,amount, category } = req.body;
    const image = req.file.filename;

    try{const newProduct = new products({
        name,
        description,
        amount,
        
        category,

        image,
       
    });
    
    await newProduct.save();
    console.log("product added successfully");
    res.status(200).json({newProduct});
}catch(err){
    console.log(err.message);
    res.status(500).json({message: "internal server error"});
}}