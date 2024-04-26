import { useEffect } from 'react'; // Import useEffect from React
import axios from 'axios'; // Import axios
import PropTypes from "prop-types";
import '../css/Home.css';

const Home = ({setRole}) => {
    axios.defaults.withCredentials=true;
    useEffect(() => {
        axios.get('http://localhost:3001/auth/verify')
            .then(res => {
                if (res.data.login) {
                 setRole(res.data.role)
                }else{
                    setRole('')
                }
                console.log(res)
            })
            .catch(err => console.log(err)); // Log any errors
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-text">Book Store</h1>
                <p className="hero-description">
                    Browse the collection of our best interesting Books
                    You will definitely find what you are looking for
                </p>
            </div>
            <div className="hero-image"></div>
        </div>
    );
};

Home.propTypes = {
    setRole: PropTypes.func.isRequired,
  
  };
export default Home;
