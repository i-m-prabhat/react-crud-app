import React, { Component } from 'react'
import { redirect } from '../Router';

export default class ShowUsers extends Component
{
  constructor(props)
  {
    console.log("This is mounting state : 1st Cycle");
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      users: [],
      msg: "",
    };
  }
  componentDidMount()
  {
    console.log('This is Update state : 2nd Cycle');
    const url = 'http://localhost:5000/users';
    let promise = fetch(url);
    promise.then((response) =>
    {
      return response.json();
    }).then((data) =>
    {
      if (Array.isArray(data))
      {
        this.setState({
          users: data
        })
      }
    }).catch((error) =>
    {
      console.log(error);
    })
  }

  componentWillUnmount()
  {
    console.log("Unmount State: 3rd Cycle")
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
                  <th className='bg'>Edite</th>
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
          <td>{item.mobile}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td><button className='bg bg2' type="button">Edit</button></td>
          <td>
            <button className='bg bg2' type="button"
              onClick={() => { this.deleteUser(item.id) }}>
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  deleteUser = (id) =>
  {
    if (window.confirm('Are you sure to delete?'))
    {
      //fetch api
      console.log(id);
      const url = 'http://localhost:5000/users/' + id;
      let promise = fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      promise.then((response) =>
      {
        if (response.ok)
        {
          this.setState({
            msg: <span className="success">User Deleted Successfully</span>
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
          msg: <span className="error">OOps Try Again Later</span>
        });

        // let ID1 = 
        setTimeout(() =>
        {
          this.setState({
            msg: "",
          });
        }, 5000);
      });
    }
  }

}