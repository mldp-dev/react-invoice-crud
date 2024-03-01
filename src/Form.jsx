import React from 'react';
//import styles from './Form.css';

function Form() {
    return (
        <>
        <div className="container">
            <div className="form-container">
                <h2 className="mb-4 p-5">Invoice Form</h2>
                <div>
                    <label htmlFor="invoice_number" className="form-label">Invoice Number</label>
                    <input type="text" id="invoice_number" name="invoice_number" className="form-control" required  />
                </div>
                <div>
                    <label htmlFor="invoice_date" className="form-label">Invoice Date</label>
                    <input type="date" id="invoice_date" name="invoice_date" className="form-control" required />
                </div>
                <div>
                    <label htmlFor="customer_name" className="form-label">Customer Name</label>
                    <input type="text" id="customer_name" name="customer_name" className="form-control" required />
                </div>
                <div>
                    <label htmlFor="product_name" className="form-label">Product Name</label>
                    <input type="text" id="product_name" name="product_name" className="form-control" required />
                </div>
                <div>
                    <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                    <input type="number" id="product_quantity" name="product_quantity" className="form-control" required />
                </div>
                <div>
                    <label htmlFor="product_price" className="form-label">Product Price</label>
                    <input type="number" id="product_price" name="product_price" className="form-control" required />
                </div>
                <div>
                    <label htmlFor="total_invoice_amount" className="form-label">Total Invoice Amount</label>
                    <input type="text" id="total_invoice_amount" name="total_invoice_amount" className="form-control"  />
                </div>
                <div className="mt-4">
                    <button type="button" className="btn btn-primary" >Calculate Total</button>
                    <button type="submit" className="btn btn-success">Submit Invoice</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form;