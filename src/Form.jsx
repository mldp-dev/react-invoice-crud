import React from 'react';
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        invoice_number: '',
        invoice_date: '',
        customer_name: '',
        product_name: '',
        product_quantity: '',
        product_price: '',
        total_invoice_amount: '',
      });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        
        //1. get invoices
        let invoices = localStorage.getItem('invoices');

        //2. check if invoices is empty or null
        if(invoices == null){
            invoices = []
        }

        //3. push new data
        invoices.push(formData)

        //4. save updated invoices in localstorage
        localStorage.setItem('invoices', JSON.stringify(invoices));
    };
  
    return (
        <>
        <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="form-container">
                <h2 className="mb-4 p-5">Invoice Form</h2>
                <div>
                    <label htmlFor="invoice_number" className="form-label">Invoice Number</label>
                    <input type="text" name="invoice_number" className="form-control" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="invoice_date" className="form-label">Invoice Date</label>
                    <input type="date" name="invoice_date" className="form-control"  onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="customer_name" className="form-label">Customer Name</label>
                    <input type="text" name="customer_name" className="form-control" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="product_name" className="form-label">Product Name</label>
                    <input type="text" name="product_name" className="form-control" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                    <input type="number" name="product_quantity" className="form-control"  onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="product_price" className="form-label">Product Price</label>
                    <input type="number" name="product_price" className="form-control"  onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="total_invoice_amount" className="form-label">Total Invoice Amount</label>
                    <input type="number" name="total_invoice_amount" className="form-control"  onChange={handleChange}/>
                </div>
                <div className="mt-4">
                    <button type="button" className="btn btn-primary" >Calculate Total</button>
                    <button type="submit" className="btn btn-success">Submit Invoice</button>
                </div>
            </div>
        </form>

        </div>
        </>
    )
}


