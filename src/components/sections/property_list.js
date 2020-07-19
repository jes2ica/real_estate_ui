import React, { Component } from 'react';

class PropertyList extends Component {
  render() {
    return(
      <div class="row">
      <div className="full-row bg-gray">
            <div className="container">
                <form className="font-12 formicon text-ordinary" method="post" action="action-page-post.html">
                    <div className="row">
                      <div className="col-md-4 col-lg-2">
                          <div className="form-group">
                              <select className="form-control">
                                  <option>Any Type</option>
                                  <option>Appartment</option>
                                  <option>Condose</option>
                                  <option>Land</option>
                                  <option>Commercial</option>
                                  <option>Villah</option>
                              </select>
                          </div>
                      </div>
                        <div className="col-md-8 col-lg-7">
                            <div className="form-group">
                                <input type="text" className="form-control" id="validationDefault03" placeholder="Enter Address, Street and City or Enter State, Zip code" required/>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary w-100">Search Property</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
      </div>
      <div class="full-row">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row pb-4">
                            <div class="col-md-9">
                                <form class="selecting-command d-inline-block" method="get">
                                    <label>Sorts By :</label>
                                    <select class="form-control bg-gray border-none">
                                        <option>Default Order</option>
                                        <option>Newest First</option>
                                        <option>Oldest First</option>
                                        <option>Top Rated</option>
                                        <option>Most Popular</option>
                                    </select>
                                    <label>1-10 of 25 results</label>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/01.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="/details">Nirala Appartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/02.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Lovelece Road Greenfield</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/03.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Relaxing Apartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/04.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Lovelece Road Greenfield</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/05.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Nirala Appartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/06.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Relaxing Apartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/01.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Meridian Villas</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/02.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Modern Family Home</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/03.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Real House Luxury Villa</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/04.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Lovelece Road Greenfield</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/05.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Apolo Family Appartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>3400</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="featured-thumb list hover-zoomer mb-4">
                                    <div class="overlay-black overflow-hidden position-relative image-area"> <img src="images/thumbnail/06.jpg" alt=""/>
                                        <div class="featured bg-primary text-white">Featured</div>
                                        <div class="sale bg-secondary text-white">For Sale</div>
                                        <div class="price text-primary">$352,000 <span class="text-white">$1200/Sqft</span></div>
                                        <div class="starmark text-white"><i class="far fa-star"></i></div>
                                    </div>
                                    <div class="featured-thumb-data shadow-one">
                                        <div class="p-4">
                                            <h5 class="text-secondary hover-text-primary mb-2"><a href="#">Nirala Appartment</a></h5>
                                            <span class="location"><i class="fas fa-map-marker-alt text-primary"></i> Avenue South Burlington, Los Angles</span> </div>
                                        <div class="bg-gray quantity px-4 pt-4">
                                            <ul>
                                                <li><span>2500</span> Sqft</li>
                                                <li><span>2</span> Beds</li>
                                                <li><span>3</span> Rooms</li>
                                                <li><span>3</span> Baths</li>
                                                <li><span>1</span> Garage</li>
                                                <li><span>2</span> Piazza</li>
                                                <li><span>Large</span> Kitchen</li>
                                            </ul>
                                        </div>
                                        <div class="p-4 d-inline-block w-100 author">
                                            <div class="float-left"><i class="fas fa-user text-primary mr-1"></i> Jeson Billiam</div>
                                            <div class="float-right"><i class="far fa-calendar-alt text-primary mr-1"></i> 6 Months Ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center mt-4">
                                        <li class="page-item disabled"> <span class="page-link">Previous</span> </li>
                                        <li class="page-item active" aria-current="page"> <span class="page-link"> 1 <span class="sr-only">(current)</span> </span> </li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">...</li>
                                        <li class="page-item"><a class="page-link" href="#">45</a></li>
                                        <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PropertyList
