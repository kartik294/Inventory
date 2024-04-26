import  { useState } from 'react'; // Import useState from react

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import Logout from './components/Logout';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
function App() {
  const [role, setRole] = useState('admin'); 

  return (
    <BrowserRouter>
      <NavBar role={role}/>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook /> } />
        <Route path="/book/:id" element={<EditBook /> } />
        <Route path="/delete/:id" element={<DeleteBook/> } />
        {/* Pass setRole function as a prop to Login component */}
        <Route path="/login" element={<Login role={role}  setRole={setRole}/>} />
        <Route path="/logout" element={<Logout  role={role}  setRole={setRole}  />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
        
        <Route path="/" element={<Home setRole={setRole} /> } />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
