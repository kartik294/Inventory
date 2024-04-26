import axios from 'axios';
import { useState } from 'react';
import '../css/AddStudent.css';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/book/add', { name, author, imageUrl })
            .then(res => {
                if (res.data.added) {
                    navigate('/books');
                }
                console.log(res);
            })
            .catch(err => {
                console.error('Error during registration request:', err);
            });
    };

    return (
        <div className="add-student-container">
            <form className="add-student-form" onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <div className="form-group">
                    <label htmlFor="book">Book Name</label>
                    <input type="text" id="book" name="book" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author Name:</label>
                    <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddBook;
