import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";

function CreateForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: 0,
        invoice_number: '',
        invoice_date: '',
        customer_name: '',
        product_name: '',
        product_quantity: '',
        product_price: '',
        total_invoice_amount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // //update total invoice amount
        // if(name == 'product_quantity' || name == 'product_price'){
        //     console.log('price',formData.product_price * formData.product_quantity)
        //     setFormData({
        //         ...formData,
        //         ['total_invoice_amount']: formData.product_price * formData.product_quantity ,
        //     });    
        // }  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve invoices from local storage
        let invoices = JSON.parse(localStorage.getItem('invoices')) || []; // Initialize if null

        //set id of new invoice data
        formData.id = invoices.length + 1

        // Push new data to invoices array
        invoices.push(formData);
        // Save updated invoices to local storage
        localStorage.setItem('invoices', JSON.stringify(invoices));
        // Redirect to thank you message
        navigate('/message');
    };

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <h2 className="mb-4 p-5">Invoice Form</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <div>
                                <label htmlFor="invoice_number" className="form-label">Invoice Number</label>
                                <input type="text" name="invoice_number" className="form-control" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="invoice_date" className="form-label">Invoice Date</label>
                                <input type="date" name="invoice_date" className="form-control" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="customer_name" className="form-label">Customer Name</label>
                                <input type="text" name="customer_name" className="form-control" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="product_name" className="form-label">Product Name</label>
                                <input type="text" name="product_name" className="form-control" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                                <input type="number" name="product_quantity" className="form-control" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="product_price" className="form-label">Product Price</label>
                                <input type="number" name="product_price" className="form-control" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="offset-md-1 col-md-4">
                                <label htmlFor="total_invoice_amount" className="form-label">Total Invoice Amount</label>
                                <h2>Total: {formData.total_invoice_amount}</h2>
                                {/* <input disabled type="number" name="total_invoice_amount" value={formData.total_invoice_amount} className="form-control" onChange={handleChange} /> */}
                            <div className="mt-4">
                                {/* <button type="button" className="btn btn-primary mr-2">Calculate Total</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mb-5 float-left">
                        <button type="submit" className="btn btn-success">Submit Invoice</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default CreateForm;
