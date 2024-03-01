import React from "react";
import { Outlet } from "react-router-dom";
//import styles from './Navbar.css';


function Navbar() {
    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand me-2" href="https://mdbgo.com/">
                    {/* <img src="https://cdn6.aptoide.com/imgs/3/4/5/3451fd4570905fcd8c4d13f4fa5a3d7b_icon.png" alt="MDB Logo" loading="lazy" style="height: 57px;" /> */}
                </a>
                <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarButtonsExample">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Invoice Form</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <a href="./table.html" className="px-3 me-2">Invoices Table
                        </a>
                        <button data-mdb-ripple-init type="button" className="btn btn-primary me-3">
                            Create Invoice
                        </button>

                    </div>
                </div>
            </div>
        </nav>

        {/* put a margin top here to show the missing elements on some route components */}
        <div className="mt-5">
            <Outlet/>
        </div>
        
        </>

    )
}

export default Navbar