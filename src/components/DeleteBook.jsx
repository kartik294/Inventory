import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:3001/book/book/${id}`)
            .then(res => {
                if (res.data.deleted) {
                    navigate('/books');
                }
            })
            .catch(err => {
                console.error("Error during delete request:", err);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Pass an empty dependency array to useEffect
  
    return null; // Return null or a placeholder component since this component doesn't render anything
}

export default DeleteBook;
