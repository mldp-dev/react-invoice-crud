import React from "react";

function Table() {
    return (
        <>
            <div className="container table-container">
                <h2 style={{ fontSize: "23px", marginBottom: "20px" }}>Invoice</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Invoice Number</th>
                            <th scope="col">Invoice Date</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Quantity</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Total Invoice Amount</th>
                            <th scope="col">Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12345</td>
                            <td>2024-03-01</td>
                            <td>John Doe</td>
                            <td>Product A</td>
                            <td>2</td>
                            <td>$10</td>
                            <td>$20</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>12346</td>
                            <td>2024-03-02</td>
                            <td>Jane Smith</td>
                            <td>Product B</td>
                            <td>3</td>
                            <td>$15</td>
                            <td>$45</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>12347</td>
                            <td>2024-03-03</td>
                            <td>Michael Johnson</td>
                            <td>Product C</td>
                            <td>1</td>
                            <td>$20</td>
                            <td>$20</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                <button type="button" className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
