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
import EditUser from "./Components/EditUser";


export default class App extends Component{

    constructor(props){
        super(props);
        this.id = window.localStorage.getItem('hash').split("/")[1];
        this.views = {
            home:<Home/>,
            showuser:<ShowUsers/>,
            createuser:<CreateUser/>,
            ["edituser/"+this.id]:<EditUser userId={this.id}/>,
        }

    }

    componentDidMount(){
        console.log("This method is Running from App.jsx")

    }

    renderViews = () => {
        console.log(route);
        return this.views[route];
    }

    render = () =>{
        
        return (
            <React.Fragment>
                <Header/>
                {this.renderViews()}
                <Footer/>
            </React.Fragment>
        )
    }
}