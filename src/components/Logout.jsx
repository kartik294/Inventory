import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = ({setRole}) => {
    const navigate = useNavigate(); // Call useNavigate as a function
    useEffect(() => {
        axios.get('http://localhost:3001/auth/logout')
            .then(res => {
                if (res.data.logout) {
                    setRole('')
                    navigate('/');
                }
            })
            .catch(err => {
                console.error("Error during logout request:", err);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Pass an empty dependency array to useEffect
};

export default Logout;
