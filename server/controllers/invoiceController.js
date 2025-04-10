const Invoice = require('../models/invoice');
const User = require('../models/user');

// Middleware to verify user
exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Create invoice for logged-in user
exports.createInvoice = async (req, res) => {
  try {
    const invoice = new Invoice({
      ...req.body,
      user: req.userId
    });

    await invoice.save();
    
    // Add invoice to user's invoices array
    await User.findByIdAndUpdate(
      req.userId,
      { $push: { invoices: invoice._id } }
    );

    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all invoices for logged-in user
exports.getUserInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.userId });
    res.json(invoices);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};