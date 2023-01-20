import React, { Component } from 'react'
import { redirect } from '../Router';
import config from "./config/config.json"

export default class ShowUsers extends Component
{
  //mounting state 
  constructor(props)
  {

    console.log('This is mouting state : 1st Cycle');
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      users: [],
      msg: ""
    };

  }
  componentDidMount()
  {
    // console.log('This is Update state : 2nd Cycle');
    /************Start of Promise Fetch Api ***************/
    let promise = fetch(config.LOCAL_URL);
    promise.then((response) =>
    {
      return response.json();
    }).then((data) =>
    {
      //Object Json
      if (Array.isArray(data))
      {
        // console.log('chal rha hai');
        this.setState({
          users: data
        })
      }
    }).catch((error) =>
    {
      console.log(error);
    })
    /************End of Promise Fetch Api ***************/
  }
  componentWillMount()
  {
    console.log("Unmounted is 3rd cycle");
  }

  render = () =>
  {
    return (
      <div className="container-fluid text-bg-dark">
        <div className="row mt-5 mb-5 pb-4 ">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {this.state.msg}
            <table class="table border border-1 text-bg-dark">
              <thead>
                <tr>
                  <th className='bg'>id</th>
                  <th className='bg'>Name</th>
                  <th className='bg'>Email</th>
                  <th className='bg'>Mobile</th>
                  <th className='bg'>Password</th>
                  <th className='bg'>Edit</th>
                  <th className='bg'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.getRecords()}
              </tbody>
            </table>
            <a className="ms-5 nav-link btn-outline-danger btn bg2 w-25" href="#createuser">🔙 Go back to create User</a>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )
  }
  getRecords = () =>
  {
    return this.state.users.map((item, index) =>
    {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td>{item.password}</td>
          <td><button type="button" className='bg bg2' onClick={() => { this.editUser(item.id) }}>Edit</button></td>
          <td>
            <button type="button" className='bg bg2'
              onClick={() => { this.deleteUser(item.id, index) }}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  deleteUser = (id, index) =>
  {
    if (window.confirm('Are you sure to delete?'))
    {
      //fetch api
      // console.log(id);
      let promise = fetch(config.LOCAL_URL + id, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      promise.then((response) =>
      {
        if (response.ok)
        {
          let userData = [...this.state.users];
          userData.splice(index, 1);

          this.setState({
            users: userData,
            msg: <span className="success">User Deleted Successfully</span>
          });

          setTimeout(() =>
          {
            this.setState({
              msg: ""
            });
          }, 3000);
          return redirect('showuser');
        }
      }).then((data) =>
      {
        console.log(data)
      }).catch((error) =>
      {
        console.log(error);

        this.setState({
          msg: <span className="error">OOps Try Again Later</span>
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
  editUser = (id) =>
  {
    //	console.log(id);
    return redirect('edituser/' + id);
  }
}