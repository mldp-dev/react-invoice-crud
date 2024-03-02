import React from 'react';

function Total({ formData }) {
    return (
        <div className="offset-md-1 col-md-4">
            <label htmlFor="total_invoice_amount" className="form-label">Total Invoice Amount</label>
            <h2>Total: {formData.total_invoice_amount}</h2>
        </div>
    );
}

export default Total;
