import React from 'react';

function Total({ formData }) {
    return (
        <div className="offset-md-1 col-md-4">
            <label htmlFor="total_invoice_amount" className="form-label">Total Invoice Amount</label>
            <h4>Total: {formData.total_invoice_amount}</h4>
        </div>
    );
}

export default Total;
