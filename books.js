const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "Please enter a book ID"]
        },
        name: {
            type: String,
            required: [true, "Please enter a book name"]
        },
        author: {
            type: string,
            required: [true, "Please enter author name"]
        },
        price: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
