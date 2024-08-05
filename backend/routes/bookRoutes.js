import express from 'express';
const router = express.Router();
import { getBooks,getBookById,addBook } from '../controllers/bookController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getBooks).post(protect, admin, addBook);;
router.route('/:id').get(getBookById);

export default router;