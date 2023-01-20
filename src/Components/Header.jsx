import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

export default class Header extends Component
{
    render = () =>
    {
        return (
            <nav className="navbar navbar-expand-lg bg">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger bg bg2 me-5" href="#home"><strong>React CRUD</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <a className="nav-link active bg bg2" aria-current="page" href="#createuser">Create User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link bg bg2" href="#showuser">Show Users</a>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}