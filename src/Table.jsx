import React, { useState, useEffect } from 'react';

function Table() {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const storedInvoices = JSON.parse(localStorage.getItem('invoices'));
        console.log('storedInvoices',storedInvoices)
        
        if (storedInvoices) {
            setInvoices(storedInvoices);
        }
    }, []);

    return (
        <div className="container table-container" style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "23px", marginBottom: "20px" }}>Invoice</h2>
            <table className="table table-striped" style={{ marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th scope="col">Invoice Number</th>
                        <th scope="col">Invoice Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Total Invoice Amount</th>
                        <th scope="col">Actions</th>{" "}
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index}>
                            <td>{invoice.invoice_number}</td>
                            <td>{invoice.invoice_date}</td>
                            <td>{invoice.customer_name}</td>
                            <td>{invoice.product_name}</td>
                            <td>{invoice.product_quantity}</td>
                            <td>{invoice.product_price}</td>
                            <td>{invoice.total_invoice_amount}</td>

                            <td className="d-flex justify-content-between">
                                <button type="button" className="btn btn-primary btn-sm mr-2">
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Table;


