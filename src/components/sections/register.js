import React, { Component } from 'react';

class Register extends Component {
  render() {
    return(
      <div className="full-row">
          <div className="container">
              <div className="row">
                  <div className="col-md-7">
                      <div className="mb-5">
                          <h4 className="mb-4 text-secondary">Welcome</h4>
                          <p>Adipiscing lacinia pede proin vulputate habitasse donec adipiscing. Cubilia Interdum hac turpis et dignissim vehicula porta nostra dictum nostra semper. Dictumst congue dictum. Nam massa id, netus interdum amet Metus turpis scelerisque aptent sapien penatibus potenti.</p>
                      </div>
                      <div className="login-condition flat-small flat-primary">
                          <h5 className="mb-4 text-secondary">Keep in a mind a few basic password rules :</h5>
                          <div className="row">
                              <div className="col-md-8 col-xl-6">
                                  <ul>
                                      <li><i className="flaticon-checked text-primary"></i>Change your passwords periodically</li>
                                      <li><i className="flaticon-checked text-primary"></i>Avoid re-using password for multiple site</li>
                                      <li><i className="flaticon-checked text-primary"></i>Use complex characters including uppercase and number</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-5">
                      <div className="mt-sm-50"> <a href="/login" className="text-secondary mr-3">Login</a>
                          <a href="/register" className="down-active text-secondary">Register</a>
                          <form className="mt-5 icon-form">
                              <div className="form-group user">
                                  <label for="exampleInputEmail1">Username</label>
                                  <input id="exampleInputEmail1" type="text" className="form-control bg-gray" placeholder="Username"/>
                              </div>
                              <div className="form-group password">
                                  <label for="exampleInputPassword1">Password</label>
                                  <input id="exampleInputPassword1" type="password" className="form-control bg-gray" placeholder="Password"/>
                              </div>
                              <div className="form-group form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                  <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                              </div>
                              <button type="submit" className="btn btn-primary mt-3">Login</button>
                              <a  className="text-secondary hover-text-primary d-block mt-4" href="#">I forgot my password !</a>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Register
