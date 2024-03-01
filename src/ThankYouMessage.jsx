import React from 'react';

export default function ThankYouMessage() {
    return (
        <div className="container pt-5">
            <div className="thank-you-message pt-5 text-center" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', background: '#fff' }}>
                <h5>Thank you for submitting the invoice</h5>
                <button className="btn btn-success mt-3">Add new invoice</button>
            </div>
        </div>
    );
}
