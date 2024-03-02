import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate,useParams } from "react-router-dom";

function EditForm() {
    const navigate = useNavigate();
    
    // get url param id
    let { id } = useParams();


    const [formData, setFormData] = useState({
        invoice_number: '',
        invoice_date: '',
        customer_name: '',
        product_name: '',
        product_quantity: '',
        product_price: '',
        total_invoice_amount: '',
    });

    useEffect(() => {

        //get and check if param id exists
        if(id == null){
            //add code
        }
        //edit code
        else{

        }

        // Logic to fetch existing data from local storage and fill the form
        const invoices = JSON.parse(localStorage.getItem('invoices'));
        let selectedInvoice = invoices.find(x=> x.id == id)
        console.log('selectedInvoice',selectedInvoice)
        if (selectedInvoice) {
            setFormData(selectedInvoice);
        }

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data updated:", formData);

        //get data from local storage
        let updatedInvoices = JSON.parse(localStorage.getItem('invoices'));
        
        //find the index of the specific data to be updated by id
        let index = updatedInvoices.findIndex(x=> x.id == id);

        // update the object by index 
        updatedInvoices[index] = formData

        //save the updated array to localstorage
        localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
        //redirect to invoices page
        navigate('/invoices')
    };

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <h2 className="mb-4 p-5">Edit Invoice</h2>
                    <div className="row">
                        <div className="col-md-7">
                            <div>
                                <label htmlFor="invoice_number" className="form-label">Invoice Number</label>
                                <input type="text" name="invoice_number" className="form-control" onChange={handleChange} value={formData.invoice_number}/>
                            </div>
                            <div>
                                <label htmlFor="invoice_date" className="form-label">Invoice Date</label>
                                <input type="date" name="invoice_date" className="form-control" onChange={handleChange} value={formData.invoice_date}/>
                            </div>
                            <div>
                                <label htmlFor="customer_name" className="form-label">Customer Name</label>
                                <input type="text" name="customer_name" className="form-control" onChange={handleChange} value={formData.customer_name}/>
                            </div>
                            <div>
                                <label htmlFor="product_name" className="form-label">Product Name</label>
                                <input type="text" name="product_name" className="form-control" onChange={handleChange} value={formData.product_name}/>
                            </div>
                            <div>
                                <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                                <input type="number" name="product_quantity" className="form-control" onChange={handleChange} value={formData.product_quantity}/>
                            </div>
                            <div>
                                <label htmlFor="product_price" className="form-label">Product Price</label>
                                <input type="number" name="product_price" className="form-control" onChange={handleChange} value={formData.product_price}/>
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
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditForm;
