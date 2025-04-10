const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(verifyToken);

router.post('/', invoiceController.createInvoice);
router.get('/', invoiceController.getUserInvoices);

module.exports = router;