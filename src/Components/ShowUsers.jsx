import React from 'react'

const ShowUsers = () =>
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
              <tr>
                <td>1001</td>
                <td>Prabhat Patel</td>
                <td>prabhat@gmail.com</td>
                <td>9451252916</td>
                <td>DEFRTY^T%$</td>
                <td><a href="/">Edite</a></td>
                <td><a href="/">Delete</a></td>
              </tr>
              <tr>
                <td>1002</td>
                <td>Vineet Pandey</td>
                <td>pandeyvineet78@gmail.com</td>
                <td>8887726046</td>
                <td>TGYU*&^%$REDF</td>
                <td><a href="/">Edite</a></td>
                <td><a href="/">Delete</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}

export default ShowUsers