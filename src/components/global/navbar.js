import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      fixedTop: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = (event) => {
    const prevScrollpos = this.state.prevScrollpos;
    const currentScrollPos = window.pageYOffset;
    const fixedTop = prevScrollpos < currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      fixedTop: fixedTop
    });
  }
  render() {
    return(
      <header id="header" className="w-100 nav-on-top fixed-top">
            <div className="main-nav bg-primary white-nav hover-border-white-nav py-2 logo-hide">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg p-0"> <a className="navbar-brand p-0" href="/"><img className="nav-logo" src="assets/img/logo/logo.png" alt=""/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle active" href="index.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                            <ul className="dropdown-menu">
												<li><a className="dropdown-item" href="index.html">Landing Page</a></li>
                                                <li><a className="dropdown-item" href="index-1.html">Default Home</a></li>
                                                <li><a className="dropdown-item" href="index-2.html">Investment Home</a></li>
                                                <li><a className="dropdown-item" href="index-3.html">Classic Home</a></li>
                                                <li><a className="dropdown-item" href="index-4.html">Slider Search</a></li>
                                                <li><a className="dropdown-item" href="index-5.html">Fixed Banner Search</a></li>
                                                <li><a className="dropdown-item" href="index-6.html">Gastronomy Slider</a></li>
                                                <li><a className="dropdown-item" href="index-7.html">Map Home</a></li>
                                                <li><a className="dropdown-item" href="../homex-rtl/index.html" target="-blank">RTL Support</a></li>
                                                <li><a className="dropdown-item" href="comming-soon.html">Coming Soon</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Agent</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Property Agent</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-agents-grid.html">Grid View</a></li>
                                                        <li><a className="dropdown-item" href="property-agents-list.html">List View</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Agent Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-search.html">Grid View</a></li>
                                                        <li><a className="dropdown-item" href="agent-list-search.html">List View</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Agent Single</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-details.html">Agent Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listing</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Property Grid</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-grid-sidebar-left.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-sidebar-right.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-full.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Property List</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-list-sidebar-left.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="property-list-sidebar-right.html">Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="property-list-full.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Property Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-list-map.html">List Map Search</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-map.html">Grid Map Search</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Simple Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-grid-simple-search.html">Grid Search</a></li>
                                                        <li><a className="dropdown-item" href="property-list-simple-search.html">List Search</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Single Property</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-single-1.html">Single Property 1</a></li>
                                                        <li><a className="dropdown-item" href="property-single-2.html">Single Property 2</a></li>
                                                        <li><a className="dropdown-item" href="property-single-3.html">Single Property 3</a></li>
                                                        <li><a className="dropdown-item" href="property-single-4.html">Single Property 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Advance Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-search.html">Agent Search Grid</a></li>
                                                        <li><a className="dropdown-item" href="agent-list-search.html">Agent Search List</a></li>
                                                        <li><a className="dropdown-item" href="property-search-grid.html">Property Search Grid</a></li>
                                                        <li><a className="dropdown-item" href="property-search-list.html">Property Search List</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">My Account</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="dashboard-personal-info.html">Personal Info</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-profile-setting.html">Profile Settings</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-change-password.html">Change Password</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-social-media.html">Social Media Settings</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-massanger.html">Dashboard</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Content Page</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="content-left-sidebar.html">Content Left Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="content-right-sidebar.html">Content Right Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="content-both-sidebar.html">Content Both Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="submit-property.html">Submit Property</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mega-menu-dropdown"> <a className="nav-link dropdown-toggle" href="blog-grid-classic.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu mega-menu">
                                                <li>
                                                    <ul className="mega-dropdown">
                                                        <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                                        <li><a className="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                                        <li><a className="dropdown-item" href="services.html">Services</a></li>
                                                        <li><a className="dropdown-item" href="service-details.html">Services Details</a></li>
                                                        <li><a className="dropdown-item" href="reviews.html">Reviews</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="mega-dropdown">
                                                        <li><a className="dropdown-item" href="pricing-table.html">Pricing</a></li>
                                                        <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                                                        <li><a className="dropdown-item" href="register.html">Register</a></li>
                                                        <li><a className="dropdown-item" href="login.html">Login</a></li>
                                                        <li><a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
                                                        <li><a className="dropdown-item" href="timeline.html">Timeline</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="mega-dropdown">
                                                        <li><a className="dropdown-item" href="compare.html">Compare</a></li>
                                                        <li><a className="dropdown-item" href="property-list-sidebar-left.html">Property List Sidebar Left</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-booking.html">Dashboard Booking</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-purchase.html">Dashboard Purchase</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-submit-property.html">Submit Property</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-system-setting.html">System Settings</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="mega-dropdown">
                                                        <li><a className="dropdown-item" href="dashboard-comment.html">Dashboard Comment</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-favorite.html">Dashboard Favorite</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-invoice.html">Invoice</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-message.html">Messages</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-tax-info.html">Tax Information</a></li>
                                                        <li><a className="dropdown-item" href="error.html">Error Page</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"> <a className="nav-link" href="contact.html">Contact</a> </li>
                                    </ul>
                                    <div className="hover-text-secondary text-white pl-3 pl-lg-3 mb-3 mb-lg-0"> <a className="d-block" href="./login">Login / Register</a> </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
  }
}

export default Navbar
