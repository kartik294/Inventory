import { useState, useEffect } from "react";
import axios from 'axios';
import BookCard from "./BookCard";
import '../css/Book.css'
const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/book/books')
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="book-list">
            {books.map(book => (
                book && book.name && book.author && book.imageUrl ? (
                    <BookCard key={book.imageUrl} book={book} />
                ) : null
            ))}
        </div>
    );
};

export default Books;
