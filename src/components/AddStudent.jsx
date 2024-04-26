import axios from 'axios';
import { useState } from 'react';
import '../css/AddStudent.css';
import {useNavigate} from 'react-router-dom'
const AddStudent = () => {
    const [roll, setRoll] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [grade, setGrade] = useState('');
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
      
        axios.post('http://localhost:3001/student/register', { roll, username, password, grade })
            .then(res => {
                if(res.data.registered){
                    navigate('/dashboard')
                }
                console.log(res)
            })
            .catch(err => {
                console.error('Error during registration request:', err);
            });
    };
    

    return (
        <div className="add-student-container">
            <form className="add-student-form" onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="form-group">
                    <label htmlFor="roll">Roll No:</label>
                    <input type="text" id="roll" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Grade:</label>
                    <input type="text" id="grade" name="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AddStudent;
