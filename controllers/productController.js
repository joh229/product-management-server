const Product = require("../models/Product");


// Add new product

exports.createProduct = async (req, res) => {
    try {

        const product = await Product.create(req.body);
        res.status(201).json(product)

    } catch (err) {

        res.status(500).json({
            error: err.message

        })
    }


}

// List all products 

exports.getProduct = async (req, res) => {

    try {
        const product = await Product.find()
        res.json(product)


    } catch (err) {
        res.status(500).json({ error: err.message })

    }


}

// Show single product

exports.getProduct = async (req, res) => {


    try {

        const product = await Product.findById(req.params.id);

        if (!Product)
            return res.status(404).json({ message: "product not found" });

        res.json(product)

    } catch (err) {

        res.status(500).json({ error: err.message })
    }
};




// Update product

exports.updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }

        )

        if (!product)
            return res.status(404).json({ message: "product not found" })
        res.json(product)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};




// Delete product

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product)
            return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted" });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};