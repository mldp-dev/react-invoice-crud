import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Total from './Total.jsx';

function Form() {
    const navigate = useNavigate();
    let { id } = useParams();

    const [formData, setFormData] = useState({
        invoice_number: '',
        invoice_date: '',
        customer_name: '',
        product_name: '',
        product_quantity: '',
        product_price: '',
        total_invoice_amount: '0',
    });

    useEffect(() => {
        if (id != null) {
            const invoices = JSON.parse(localStorage.getItem('invoices'));
            let selectedInvoice = invoices.find(x => x.id == id)
            console.log('selectedInvoice', selectedInvoice)
            if (selectedInvoice) {
                setFormData(selectedInvoice);
            }
        }
    }, [id]); // Adding id as a dependency to re-run effect when id changes

    useEffect(() => {
        const calculateTotal = () => {
            const { product_quantity, product_price } = formData;
            const quantity = parseFloat(product_quantity);
            const price = parseFloat(product_price);
            const total = isNaN(quantity) || isNaN(price) ? 0 : quantity * price;
            setFormData(prevState => ({
                ...prevState,
                total_invoice_amount: currencyFormat(total),
            }));
        };

        calculateTotal();
    }, [formData.product_quantity, formData.product_price]);

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

        if (id != null) {
            edit();
        } else {
            add();
        }
    };

    function add() {
        // Retrieve invoices from local storage
        let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        formData.id = invoices.length + 1;
        invoices.push(formData);
        localStorage.setItem('invoices', JSON.stringify(invoices));
        navigate('/message');
    }
    
    function edit() {
        let updatedInvoices = JSON.parse(localStorage.getItem('invoices'));
        let index = updatedInvoices.findIndex(x => x.id == id);
        updatedInvoices[index] = formData;
        localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
        navigate('/invoices')
    }

    function currencyFormat(num) {
        return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <h2 className="mb-4 p-5"> {id == null ? "Create" : "Edit"} Invoice</h2>
                        <div className="row">
                            <div className="col-md-7">
                                <div>
                                    <label htmlFor="invoice_number" className="form-label">Invoice Number</label>
                                    <input type="text" name="invoice_number" className="form-control" onChange={handleChange} value={formData.invoice_number} />
                                </div>
                                <div>
                                    <label htmlFor="invoice_date" className="form-label">Invoice Date</label>
                                    <input type="date" name="invoice_date" className="form-control" onChange={handleChange} value={formData.invoice_date} />
                                </div>
                                <div>
                                    <label htmlFor="customer_name" className="form-label">Customer Name</label>
                                    <input type="text" name="customer_name" className="form-control" onChange={handleChange} value={formData.customer_name} />
                                </div>
                                <div>
                                    <label htmlFor="product_name" className="form-label">Product Name</label>
                                    <input type="text" name="product_name" className="form-control" onChange={handleChange} value={formData.product_name} />
                                </div>
                                <div>
                                    <label htmlFor="product_quantity" className="form-label">Product Quantity</label>
                                    <input type="number" name="product_quantity" className="form-control" onChange={handleChange} value={formData.product_quantity} />
                                </div>
                                <div>
                                    <label htmlFor="product_price" className="form-label">Product Price</label>
                                    <input type="number" name="product_price" className="form-control" onChange={handleChange} value={formData.product_price} />
                                </div>
                            </div>
                            <Total formData={formData} />
                        </div>
                        <div className="mt-4 mb-5 float-left">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;
