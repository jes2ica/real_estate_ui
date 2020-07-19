import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="full-row bg-gray p-0">
        <div className="container">
                  <div  className="row">
                      <div className="col-lg-12">
                          <div className="divider py-80">
                              <div className="row">
                                  <div className="col-md-12 col-lg-4">
                                      <div className="footer-widget mb-4">
                                          <div className="footer-logo mb-4"> <a href="#"><img className="logo-bottom" src="assets/img/logo/logo.png" alt="image"/></a> </div>
                                          <p className="pb-20">Risus commodo congue augue phasellus morbi hymenaeos ante tincidunt eu orci dictum bibendum lacus platea primis mi lacinia felis gravida natoque bibendum cubilia montes tristique et arcu blandit risus. Lobortis dignissim nam.</p>
                                          <a className="btn btn-primary mt-4" href="#">Register Now</a> </div>
                                  </div>
                                  <div className="col-md-12 col-lg-8">
                                      <div className="row">
                                          <div className="col-md-4 col-lg-4">
                                              <div className="footer-widget footer-nav mb-4">
                                                  <h4 className="widget-title text-secondary double-down-line-left position-relative">Support</h4>
                                                  <ul>
                                                      <li><a href="#">Forum</a></li>
                                                      <li><a href="#">Statistics</a></li>
                                                      <li><a href="#">Terms and Condition</a></li>
                                                      <li><a href="#">Get Support</a></li>
                                                      <li><a href="#">Freequenly Ask Question</a></li>
                                                      <li><a href="#">Contact</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-lg-4">
                                              <div className="footer-widget footer-nav mb-4">
                                                  <h4 className="widget-title text-secondary double-down-line-left position-relative">Quick Links</h4>
                                                  <ul>
                                                      <li><a href="#">About Us</a></li>
                                                      <li><a href="#">Featured Property</a></li>
                                                      <li><a href="#">Become A Member</a></li>
                                                      <li><a href="#">Submit Property</a></li>
                                                      <li><a href="#">How It Work</a></li>
                                                      <li><a href="#">Our Agents</a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-lg-4">
                                              <div className="footer-widget">
                                                  <h4 className="widget-title text-secondary double-down-line-left position-relative">Contact Us</h4>
                                                  <ul>
                                                      <li>Collins Street West, Victoria 8007, Australia</li>
                                                      <li>+1 246-345-0695</li>
                                                      <li>helpline@homex.com</li>
                                                  </ul>
                                              </div>
                                              <div className="footer-widget media-widget mt-4 text-secondary hover-text-primary"> <a href="#"><i className="fab fa-facebook-f"></i></a> <a href="#"><i className="fab fa-twitter"></i></a> <a href="#"><i className="fab fa-google-plus-g"></i></a> <a href="#"><i className="fab fa-linkedin-in"></i></a> <a href="#"><i className="fas fa-rss"></i></a> </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row copyright">
                      <div className="col-sm-6"> <span>© 2019 Homex All right reserved</span> </div>
                      <div className="col-sm-6">
                          <ul className="line-menu text-ordinary hover-text-primary float-right">
                              <li><a href="#">Privacy & Policy</a></li>
                              <li>|</li>
                              <li><a href="#">Site Map</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
      </footer>
    )
  }
}

export default Footer
