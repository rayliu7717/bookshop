import asyncHandler from '../middleware/asyncHandler.js';
import Book from '../models/bookModel.js';

// @desc    Fetch all books
// @route   GET /api/books
// @access  Public
const getBooks = asyncHandler(async (req, res) =>{
    const books = await Book.find({});
    res.json(books)
})


// @desc    Fetch single book
// @route   GET /api/books/:id
// @access  Public
const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      return res.json(book);
    }
    res.status(404);
    throw new Error('Resource not found');
});


// @desc    Add a book
// @route   POST /api/books
// @access  Private/Admin
const addBook = asyncHandler(async (req, res) => {
  const book = new Book({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    publisher: 'Sample publisher',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const addedBook = await book.save();
  res.status(201).json(addedBook);
});


export { getBooks, getBookById,addBook };