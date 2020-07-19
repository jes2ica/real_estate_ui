import React, { Component } from 'react';

class Property extends Component {
  render() {
    return(
      <div className="full-row">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="mt-2 text-secondary">Nirala Appartment</h5>
                                <span className="mb-sm-20 d-block"><i className="fas fa-map-marker-alt text-primary font-12"></i> Avenue South Burlington, Los Angles</span> </div>
                            <div className="col-md-6">
                                <div className="text-primary text-left h5 my-2 text-md-right">$352,000</div>
                                <span className="d-block text-left text-secondary text-md-right"><i className="far fa-star"></i></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="single-property" className="property-photo">
                                    <div className="ls-slide" data-ls="duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;"> <img width="1920" height="1080" src="assets/img/slider/01.jpg" className="ls-bg" alt="" /> </div>
                                    <div className="ls-slide" data-ls="duration:7500; transition2d:5; kenburnszoom:out; kenburnsscale:1.2;"> <img width="1920" height="1080" src="assets/img/slider/02.jpg" className="ls-bg" alt="" /> </div>
                                    <div className="ls-slide" data-ls="duration:7500; transition2d:5; kenburnszoom:in; kenburnsscale:1.2;"> <img width="1920" height="1080" src="assets/img/slider/03.jpg" className="ls-bg" alt="" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="property-details">
                                    <div className="bg-gray property-quantity px-4 pt-4 w-100">
                                        <ul>
                                            <li><span className="text-secondary">2500</span> Sqft</li>
                                            <li><span className="text-secondary">2</span> Beds</li>
                                            <li><span className="text-secondary">3</span> Rooms</li>
                                            <li><span className="text-secondary">3</span> Baths</li>
                                            <li><span className="text-secondary">1</span> Garage</li>
                                            <li><span className="text-secondary">2</span> Piazza</li>
                                            <li><span className="text-secondary">Large</span> Kitchen</li>
                                        </ul>
                                    </div>
                                    <h4 className="text-secondary my-4">Description</h4>
                                    <p>Bibendum purus aenean mus aenean eu interdum nonummy ipsum ad consequat. Dui eros donec faucibus convallis tempus rutrum id donec mus hymenaeos placerat congue curae mauris turpis gravida viverra consequat consequat gravida luctus.</p>
                                    <p className="mt-30">Consectetuer aliquet. Libero porttitor curabitur vivamus accumsan placerat mattis, in lobortis auctor dolor mus, morbi. Dictumst dictumst. Faucibus. Est mollis. Turpis tortor. In vivamus venenatis neque hendrerit risus amet auctor cras, varius augue nullam morbi posuere lacus porttitor dictumst tincidunt curabitur ilisis torquent magnis cras maecenas vel. Odio proin, aptent tristique urna, nibh iaculis auctor Arcu faucibus sollicitudin donec inceptos dapibus viverra. Lorem consequat. Ac viverra torquent.</p>
                                    <a className="text-primary hover-text-secondary mt-4 mb-4 pl-3 position-relative plus-minus d-block" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">More Details</a>
                                    <div className="collapse" id="multiCollapseExample1">
                                        <p>Hymenaeos class nullam pretium cras tristique orci tincidunt, dapibus. Blandit phasellus ligula. Elit senectus posuere commodo in semper, et placerat vehicula ante. Vehicula dui bibendum curabitur. Scelerisque mus mattis elit dolor suspendisse gravida. Faucibus, viverra feugiat dignissim dis. Nulla accumsan nonummy a semper donec rhoncus hendrerit, mi gravida eget nulla neque torquent parturient facilisis praesent enim mus sem. Cubilia. Suscipit. Senectus curae; id augue dapibus sagittis tempor. Cursus. Tortor montes imperdiet sollicitudin tristique consequat. Pellentesque conubia euismod proin convallis donec torquent elit nisi eget aliquam ipsum lorem convallis velit sapien augue tempor ligula aliquet euismod eget nisl justo urna suscipit.</p>
                                        <p>Purus morbi sociis. Torquent montes convallis magna potenti gravida laoreet id. Nam vehicula aliquam massa suspendisse in facilisi in pharetra eget justo viverra, posuere. Sed interdum euismod adipiscing lobortis massa risus ad enim lectus magnis lacinia ultricies dolor curabitur gravida, potenti dapibus est hymenaeos maecenas. Scelerisque vehicula. Turpis lacus pellentesque nisl platea urna ut sapien semper mus amet aptent. Volutpat nam nascetur commodo vitae maecenas augue feugiat, sem interdum molestie ultricies dictumst. Ante suscipit. Netus ultrices class mollis elit potenti auctor penatibus. Commodo per. Praesent torquent, rhoncus porttitor vitae sem platea, sed dapibus facilisi nam convallis, tristique eleifend taciti ultricies elit varius. Ipsum habitant senectus turpis magna nostra lacus nisl aliquam pharetra pellentesque, eros ullamcorper. Hymenaeos sit laoreet ante per convallis ornare posuere, cum vitae elementum fusce amet. Eget. At laoreet. Molestie sit ac. Vestibulum quis ipsum neque curabitur convallis Convallis nisi adipiscing ligula. Imperdiet habitasse condimentum, sed potenti accumsan tristique cras tempus. Consectetuer curae; ad consequat platea aliquet est enim dis justo justo torquent eget pede malesuada curae; scelerisque dolor Cras natoque commodo molestie elit mauris conubia ad ultrices mus cum dictum. Quisque urna aliquam, ridiculus curae; egestas turpis aptent elit curabitur ipsum. Euismod rhoncus orci vestibulum euismod nunc.</p>
                                    </div>
                                    <h5 className="mt-5 mb-4 text-secondary">Property Summary</h5>
                                    <div  className="table-striped font-14 overflow-x-scroll pb-2">
                                        <table className="w-100">
                                            <tbody>
                                                <tr>
                                                    <td>Property Id :</td>
                                                    <td>LA459C27</td>
                                                    <td>Listing Type :</td>
                                                    <td>For Sale</td>
                                                </tr>
                                                <tr>
                                                    <td>Property Type:</td>
                                                    <td>Appartment</td>
                                                    <td>Current Owner :</td>
                                                    <td>Green Developers LTD</td>
                                                </tr>
                                                <tr>
                                                    <td>Insurance :</td>
                                                    <td>Yes</td>
                                                    <td>Architecture :</td>
                                                    <td>Nova Socity</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Floor :</td>
                                                    <td>10 Story Building</td>
                                                    <td>Year of Built :</td>
                                                    <td>2008 - 2012</td>
                                                </tr>
                                                <tr>
                                                    <td>Furniture Type :</td>
                                                    <td>High Class</td>
                                                    <td>Payment Way :</td>
                                                    <td>Instalment / Cash</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h5 className="mt-5 mb-4 text-secondary">More Details</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <ul>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Age: </span>10 Years</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Swiming Pool: </span>Yes</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Heating System: </span>Floor Heating</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Parking: </span>Attached Garage</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Type: </span>Appartment</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Security: </span>3 Step Security</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Dining Capacity: </span>20 People</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Heating: </span>Forced Air, Gas</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">3rd Party: </span>No</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Alivator: </span>2 Medium Type</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Exit: </span>3 Exit Gate</li>
                                                <li className="mb-3"><span className="text-secondary font-weight-bold">Water: </span>City</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 className="mt-5 mb-4 text-secondary">Floor Plans</h5>
                                    <div className="accordion" id="accordionExample">
                                        <button className="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Floor Plans	[ 4200 sqft ] </button>
                                        <div id="collapseOne" className="collapse show p-4" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <ul className="d-inline-block">
                                                <li className="float-left mr-3"><span className="text-secondary">Bed: </span>162.5 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Kitchen: </span>108.2 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Dining: </span>145.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Bath: </span>38.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Storage: </span>123. 2 sqft</li>
                                            </ul>
                                            <img src="images/house-floor-plan.png" alt=""/> </div>
                                        <button className="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Garage Plan     [ 340 sqft ] </button>
                                        <div id="collapseTwo" className="collapse p-4" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <ul className="d-inline-block">
                                                <li className="float-left mr-3"><span className="text-secondary">Bed: </span>162.5 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Kitchen: </span>108.2 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Dining: </span>145.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Bath: </span>38.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Storage: </span>123. 2 sqft</li>
                                            </ul>
                                            <img src="images/house-floor-plan.png" alt=""/> </div>
                                        <button className="bg-gray hover-bg-primary hover-text-white text-ordinary py-3 px-4 mb-1 w-100 text-left rounded position-relative collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Garden Design    [ 480 sqft ] </button>
                                        <div id="collapseThree" className="collapse p-4" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <ul className="d-inline-block">
                                                <li className="float-left mr-3"><span className="text-secondary">Bed: </span>162.5 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Kitchen: </span>108.2 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Dining: </span>145.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Bath: </span>38.7 sqft</li>
                                                <li className="float-left mr-3"><span className="text-secondary">Storage: </span>123. 2 sqft</li>
                                            </ul>
                                            <img src="images/house-floor-plan.png" alt=""/> </div>
                                    </div>
                                    <h5 className="mt-5 mb-4 text-secondary">Nearby Places</h5>
                                    <ul className="nav nav-pills mb-3 bg-gray" id="pills-tab" role="tablist">
                                        <li className="nav-item"> <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Hospital</a> </li>
                                        <li className="nav-item"> <a className="nav-link" id="pills-profile-tab2" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Shopping</a> </li>
                                        <li className="nav-item"> <a className="nav-link" id="pills-contact-tab3" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">School</a> </li>
                                        <li className="nav-item"> <a className="nav-link" id="pills-contact-tab4" data-toggle="pill" href="#pills-resturant" role="tab" aria-controls="pills-contact" aria-selected="false">Resturant</a> </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home">
                                            <div className="overflow-x-scroll pb-3">
                                                <table className="tab-table w-100 text-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Distance</th>
                                                            <th scope="col">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Massachusetts General Hospital</td>
                                                            <td>23.7 km</td>
                                                            <td>Medical Collage</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Langone Medical Center</td>
                                                            <td>13.2 km</td>
                                                            <td>Hart Hospital</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mount Sinai Hospital</td>
                                                            <td>58.0 km</td>
                                                            <td>Eye Hospital</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile">
                                            <div className="overflow-x-scroll pb-3">
                                                <table className="tab-table w-100 text-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Distance</th>
                                                            <th scope="col">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Massachusetts General Hospital</td>
                                                            <td>23.7 km</td>
                                                            <td>Medical Collage</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Langone Medical Center</td>
                                                            <td>13.2 km</td>
                                                            <td>Hart Hospital</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mount Sinai Hospital</td>
                                                            <td>58.0 km</td>
                                                            <td>Eye Hospital</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-resturant" role="tabpanel" aria-labelledby="pills-resturant">
                                            <div className="overflow-x-scroll pb-3">
                                                <table className="tab-table w-100 text-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Distance</th>
                                                            <th scope="col">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Massachusetts General Hospital</td>
                                                            <td>23.7 km</td>
                                                            <td>Medical Collage</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Langone Medical Center</td>
                                                            <td>13.2 km</td>
                                                            <td>Hart Hospital</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mount Sinai Hospital</td>
                                                            <td>58.0 km</td>
                                                            <td>Eye Hospital</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact">
                                            <div className="overflow-x-scroll pb-3">
                                                <table className="tab-table w-100 text-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Distance</th>
                                                            <th scope="col">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Massachusetts General Hospital</td>
                                                            <td>23.7 km</td>
                                                            <td>Medical Collage</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Langone Medical Center</td>
                                                            <td>13.2 km</td>
                                                            <td>Hart Hospital</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mount Sinai Hospital</td>
                                                            <td>58.0 km</td>
                                                            <td>Eye Hospital</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="mt-5 mb-4 text-secondary">Property Video</h5>
                                    <div className="property-video overlay-secondary position-relative"> <img src="images/video.jpg" alt=""/> <a className="video-popup xy-center z-index-9" href="https://vimeo.com/10749235" title="video popup"><i className="fas fa-play"></i></a>
                                        <div className="xy-center">
                                            <div className="ball-scale-multiple">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="double-down-line-left text-secondary position-relative pb-4 mb-4 mt-5">Give Your Review</h4>
                                    <p className="text-ordinary">Move Mouse for Rating Active Star</p>
                                    <ul className="d-flex float-left mr-2 text-primary font-12">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                    <span className="text-primary">Very Good</span>
                                    <form className="bg-gray-input mt-4 mb-5" action="action.html" method="post">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="firstname" placeholder="Name" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="email" placeholder="Email" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="comments" cols="30" rows="6" placeholder="Comments"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                    <h5 className="mt-5 mb-4 text-secondary">User Reviews</h5>
                                    <ul className="post-comments">
                                        <li className="py-4 d-flex">
                                            <div className="avata"><img src="images/user/01.jpg" alt=""/></div>
                                            <div className="comment-detail">
                                                <div className="d-inline-block mb-3">
                                                    <h5 className="text-secondary">Rebecca D. Nagy</h5>
                                                    <ul className="text-primary d-flex font-13">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="float-right"> <span className="mr-4 text-ordinary">27 February, 2018 at 3.27 pm</span> <a href="#" className="text-primary hover-text-secondary">Replay</a> </div>
                                                <p>Fermentum mus porttitor tempor arcu posuere. Nibh consectetuer condimentum ultricies pulvinar eget pede litora interdum magna aenean ullamcorper nisi dis. Viverra. Vulputate. Quisque neque luctus quis rhoncus.</p>
                                            </div>
                                        </li>
                                        <li className="py-4 d-flex">
                                            <div className="avata"><img src="images/user/02.jpg" alt=""/></div>
                                            <div className="comment-detail">
                                                <div className="d-inline-block mb-3">
                                                    <h5 className="text-secondary">Rebecca D. Nagy</h5>
                                                    <ul className="text-primary d-flex font-13">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="float-right"> <span className="mr-4 text-ordinary">27 February, 2018 at 3.27 pm</span> <a href="#" className="text-primary hover-text-secondary">Replay</a> </div>
                                                <p>Fermentum mus porttitor tempor arcu posuere. Nibh consectetuer condimentum ultricies pulvinar eget pede litora interdum magna aenean ullamcorper nisi dis. Viverra. Vulputate. Quisque neque luctus quis rhoncus.</p>
                                            </div>
                                        </li>
                                        <li className="py-4 d-flex">
                                            <div className="avata"><img src="images/user/01.jpg" alt=""/></div>
                                            <div className="comment-detail">
                                                <div className="d-inline-block mb-3">
                                                    <h5 className="text-secondary">Rebecca D. Nagy</h5>
                                                    <ul className="text-primary d-flex font-13">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="float-right"> <span className="mr-4 text-ordinary">27 February, 2018 at 3.27 pm</span> <a href="#" className="text-primary hover-text-secondary">Replay</a> </div>
                                                <p>Fermentum mus porttitor tempor arcu posuere. Nibh consectetuer condimentum ultricies pulvinar eget pede litora interdum magna aenean ullamcorper nisi dis. Viverra. Vulputate. Quisque neque luctus quis rhoncus.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mt-md-50"> <a href="#" className="btn btn-ordinary"><i className="fas fa-download"></i></a> <a href="#" className="btn btn-ordinary">Add to Compare</a> </div>
                                <div className="mt-4 p-4 shadow-one">
                                    <div className="img-80 float-left mr-3 mb-4 rounded-circle"><img src="images/user/02.jpg" alt=""/></div>
                                    <h6 className="mt-2 text-primary">Josphine Pacheco</h6>
                                    <span>+( 81 ) 84 538 231</span>
                                    <form className="bg-gray-input d-inline-block" action="action.html" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="name" name="firstname" placeholder="Name" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="email" name="email" placeholder="Email" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="massage" name="massage" cols="30" rows="6" placeholder="Massage"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" id="send" value="submit" className="btn btn-primary w-100">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <h5 className="mt-5 mb-4 text-secondary">Instalment Calculator</h5>
                                <form className="d-inline-block w-100" action="action.html" method="post">
                                    <label className="sr-only" for="inlineFormInputGroupUsername1">Property Price</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername1" placeholder="Property Price"/>
                                    </div>
                                    <label className="sr-only" for="inlineFormInputGroupUsername2">Down Payment</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Down Payment"/>
                                    </div>
                                    <label className="sr-only" for="inlineFormInputGroupUsername3">Duration Year</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername3" placeholder="Duration Year"/>
                                    </div>
                                    <label className="sr-only" for="inlineFormInputGroupUsername4">Interest Rate</label>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">%</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername4" placeholder="Interest Rate"/>
                                    </div>
                                    <button type="submit" value="submit" className="btn btn-primary mt-4">Calclute Instalment</button>
                                </form>
                                <h5 className="mt-5 mb-4 text-secondary">Monthly Best Deal</h5>
                                <div className="owl-carousel featured-property">
                                    <div className="featured-thumb hover-zoomer mb-4 bg-gray">
                                        <div className="overlay-black overflow-hidden position-relative"> <img src="images/thumbnail/01.jpg" alt=""/>
                                            <div className="featured bg-primary text-white">Featured</div>
                                            <div className="sale bg-secondary text-white">For Sale</div>
                                            <div className="price text-primary">$352,000 <span className="text-white">$1200/Sqft</span></div>
                                            <div className="starmark text-white"><i className="far fa-star"></i></div>
                                        </div>
                                        <div className="featured-thumb-data">
                                            <div className="p-4">
                                                <h5 className="text-secondary hover-text-primary mb-2"><a href="#">Nirala Appartment</a></h5>
                                                <span className="location"><i className="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        </div>
                                    </div>
                                    <div className="featured-thumb hover-zoomer mb-4 bg-gray">
                                        <div className="overlay-black overflow-hidden position-relative"> <img src="images/thumbnail/02.jpg" alt=""/>
                                            <div className="featured bg-primary text-white">Featured</div>
                                            <div className="sale bg-secondary text-white">For Sale</div>
                                            <div className="price text-primary">$212,000 <span className="text-white">$1200/Sqft</span></div>
                                            <div className="starmark text-white"><i className="far fa-star"></i></div>
                                        </div>
                                        <div className="featured-thumb-data">
                                            <div className="p-4">
                                                <h5 className="text-secondary hover-text-primary mb-2"><a href="#">Apolo Family Appartment</a></h5>
                                                <span className="location"><i className="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        </div>
                                    </div>
                                    <div className="featured-thumb hover-zoomer mb-4 bg-gray">
                                        <div className="overlay-black overflow-hidden position-relative"> <img src="images/thumbnail/03.jpg" alt=""/>
                                            <div className="featured bg-primary text-white">Featured</div>
                                            <div className="sale bg-secondary text-white">For Sale</div>
                                            <div className="price text-primary">$52,000 <span className="text-white">$1200/Sqft</span></div>
                                            <div className="starmark text-white"><i className="far fa-star"></i></div>
                                        </div>
                                        <div className="featured-thumb-data">
                                            <div className="p-4">
                                                <h5 className="text-secondary hover-text-primary mb-2"><a href="#">Office Floor In Trade Center</a></h5>
                                                <span className="location"><i className="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="mb-30 text-secondary">Property Location</h5>
                                <div className="map-widget" id="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Property
