import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Form from './Form.jsx'
import Table from './Table.jsx'
import ThankYouMessage from './ThankYouMessage.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="create" element={<Form />} />
        <Route path="message" element={<ThankYouMessage />} />
        <Route path="invoices" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
