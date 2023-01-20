import React, { Component } from "react";
import { redirect } from "../Router";
import config from "./config/config.json";

export default class EditUser extends Component
{
    //lifecycle : mounting state
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile: "",
            password: "",
            users: [],
            msg: "",
        }
    }

    render = () =>
    {
        return (
            <div className="container text-bg-dark">
                <div className="row mt-4 mb-4 pb-4 pt-4 ">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <fieldset className='form-control bg'>
                            <legend>Edit User Here</legend>
                            <form>
                                {this.state.msg}
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your Name." value={this.state.name} onChange={(event) =>
                                    {
                                        this.setState({ name: event.target.value })
                                        //  console.log(this.state);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" placeholder="Enter Your Mobile Number" value={this.state.mobile} onChange={(event) => { this.setState({ mobile: event.target.value }) }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Your Password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                </div>
                                <br />
                                <center>
                                    <button type="button" onClick={this.updateData} className="btn cb btn-outline-danger mb-2">Update</button>
                                </center>
                            </form>
                        </fieldset>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }

    componentDidMount()
    {

        let id = this.props.userId;
        //    let promise = 
        fetch(config.LOCAL_URL + id).then((response) =>
        {

            if (response.ok)
            {
                return response.json();
            }

        }).then((data) =>
        {

            this.setState({
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                password: data.password,
            });

        }).catch((error) =>
        {
            console.log(error);
        });

    }

    updateData = () =>
    {

        let id = this.props.userId;
        let updateUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile,
        }

        console.log(config);
        //console.log(process.env);
        //    let promise = 
        fetch(config.LOCAL_URL + id, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(updateUser)
        }).then((response) =>
        {
            if (response.ok)
            {

                return redirect('showuser');
            }
        }).then((data) =>
        {

        }).catch((error) =>
        {

        });
    }
}