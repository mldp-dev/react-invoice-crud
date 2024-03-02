import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import CreateForm from './CreateForm.jsx'
import Table from './Table.jsx'
import ThankYouMessage from './ThankYouMessage.jsx';
import EditForm from './EditForm.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="create" element={<CreateForm />} />
        <Route path="message" element={<ThankYouMessage />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="invoices" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
