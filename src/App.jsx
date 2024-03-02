import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Form from './Form.jsx';
import Total from './Total.jsx';
import ThankYouMessage from './ThankYouMessage.jsx';
import Table from './Table.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="create" element={<Form />} />
        <Route path="total" element={<Total />} />
        <Route path="message" element={<ThankYouMessage />} />
        <Route path="/edit/:id" element={<Form />} />
        <Route path="invoices" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
