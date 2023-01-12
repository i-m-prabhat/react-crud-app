import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css"
import { route } from "./Router";
import CreateUser from "./Components/CreateUser";
import ShowUsers from "./Components/ShowUsers";
import Home from "./Components/Home";


export default class App extends Component{

    view = {
        createuser:<CreateUser/>,
        home:<Home/>,
        showuser:<ShowUsers/>
    }
    render = () => {
        return (
            <React.Fragment>
            <Header/>
            {this.renderViews()}
            <Footer/>
            </React.Fragment>
        )
    }
    renderViews=()=>{
        return this.view[route];
    }
}

















