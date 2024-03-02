import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ThankYouMessage() {
    const navigate = useNavigate();

    const handleAddNewInvoice = () => {
        navigate('/create');
    };

    return (
        <div className="container pt-5">
            <div className="thank-you-message pt-5 text-center" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', background: '#fff' }}>
                <h5>Thank you for submitting the invoice</h5>
                <button className="btn btn-success mt-3" onClick={handleAddNewInvoice}>Add new invoice</button>
            </div>
        </div>
    );
}
