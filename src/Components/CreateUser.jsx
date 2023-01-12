import React from 'react'

const CreateUser = () =>
{
  return (
    <div className="container text-bg-dark">
      <div className="row mt-4 mb-4 pb-4 pt-4 ">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <fieldset className='form-control text-bg-secondary'>
            <legend>Register User Info</legend>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Name." />
              </div>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="mobile">Mobile</label>
                <input type="text" className="form-control" id="mobile" placeholder="Enter Your Mobile Number" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your mobile number with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <br />
              <center>
                <button type="submit" className="btn btn-success bg bg2 mb-2">Create User</button>
              </center>
            </form>
          </fieldset>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  )
}

export default CreateUser