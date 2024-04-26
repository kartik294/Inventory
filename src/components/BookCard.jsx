import PropTypes from "prop-types";
import '../css/Book.css';
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { name, author, imageUrl } = book;

    return (
        <div className="book-card">
            <h2>Book Card</h2>
            <img src={imageUrl} alt={name} className="book-image" />
            <div className="book-details">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="book-actions">
                <button className="btn-link"><Link to={`/book/${book._id}`}>edit</Link></button>
                <button className="btn-link"><Link to={`/delete/${book._id}`}>delete</Link></button>
                
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
};

export default BookCard;
