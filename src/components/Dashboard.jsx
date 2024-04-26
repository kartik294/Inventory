import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Dashboard.css';

const Dashboard = () => {
   const [student, setStudents] = useState(0);
   const [admin, setAdmin] = useState(0);
   const [books, setBooks] = useState(0);

   useEffect(() => {
      axios.get('http://localhost:3001/dashboard')
      .then(res => {
         if (res.data.ok) {
            setStudents(res.data.student);
            setAdmin(res.data.admin);
            setBooks(res.data.book);
         }
      })
      .catch(err => console.error(err)); // Corrected error variable name
   }, []);

   return (
      <div className="dashboard">
         <div className="dashboard-box">
            <h2>Total Books</h2>
            <h2>{books}</h2> {/* Display total books */}
         </div>
         <div className="dashboard-box">
            <h2>Total Students</h2>
            <h2>{student}</h2> {/* Display total students */}
         </div>
         <div className="dashboard-box">
            <h2>Total Admin</h2>
            <h2>{admin}</h2> {/* Display total admins */}
         </div>
      </div>
   );
};

export default Dashboard;
