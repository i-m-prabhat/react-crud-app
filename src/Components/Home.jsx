import React from 'react'

const Home = () =>
{
  return (
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <div className="row">
        <div className="col-sm-6">
          <main role="main" class="inner cover p-4">
            <h1 class="cover-heading">React crud page.</h1>
            <p class="lead">This is the React CRUD Home page <br />
              Here We can create users and we also see the users data <br />
              if you want to see the users data click on "Show User" Button <br />
              And If You are Creating A user in database then click on "Create User" Button <br />
              And You will create users and Show the users
            </p>
            <p class="lead">
              <center>
                <a href="#createuser" class="btn btn-lg btn-secondary bg bg2">Create User</a>
                <a href="#showuser" class="btn btn-lg btn-secondary ms-5 bg bg2">Show User</a>
              </center>
            </p>
          </main>
        </div>
        <div className="col-sm-6 mt-5 ms-0">
          <img src="https://miro.medium.com/max/1400/1*PpTSlj9PSgB4VPEx4zEReQ.webp" alt="crud img" height={"400px"} width={"670px"} />
        </div>
      </div>
    </div>
  )
}

export default Home
