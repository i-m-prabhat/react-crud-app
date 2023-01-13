import React, { Component } from 'react'

class ShowUsers extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount()
  {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(
        (users) =>
        {
          this.setState({ users: users });
        },
        (error) =>
        {
          alert(error);
        }
      )
  }

  render()
  {
    return (
      <div className="container-fluid text-bg-dark">
        <div className="row mt-5 mb-5 pb-4 ">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
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
                {this.state.users.map(user =>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.password}</td>
                    <td><a href="/">Edite</a></td>
                    <td><a href="/">Delete</a></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )
  }
}

export default ShowUsers