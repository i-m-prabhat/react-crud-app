import React, { Component } from 'react'
import { redirect } from '../Router';
import config from "./config/config.json"
class CreateUser extends Component
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
  render()
  {
    return (
      <div className="container text-bg-dark">
        <div className="row mt-4 mb-4 pb-4 pt-4 ">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <fieldset className='form-control bg'>
              <legend>User Register Here</legend>
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
                  <button type="button" onClick={this.savaData} className="btn cb btn-outline-danger mb-2">SAVE</button>
                </center>
              </form>
            </fieldset>
            <a className="ms-5 nav-link btn-outline-danger btn bg2 w-50 mt-3" href="#home">🔙 Go back to Home Page</a>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    )
  }
  savaData = () =>
  {
    let promise = fetch(config.LOCAL_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(this.state)
    });

    promise.then((response) =>
    {
      if (response.ok)
      {
        this.setState({
          name: "",
          email: "",
          mobile: "",
          password: "",
          msg: <span className='success'>User Created Successfully !</span>
        });
        return redirect('showuser');
      }
    }).then((data) =>
    {
      console.log(data)
    }).catch((error) =>
    {
      console.log(error);
      this.setState({
        msg: <span className="error">Server is busy. Try Again Later</span>
      });
      setTimeout(() =>
      {
        this.setState({
          msg: "",
        });
      }, 5000);
    });
  }
}
export default CreateUser