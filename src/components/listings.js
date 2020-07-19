import React from 'react';
import Footer from './global/footer';
import Navbar from './global/navbar';
import PropertyList from './sections/property_list';


const Listings = () => {
    return <div id="page-wrapper">
      <div class="row">
        <Navbar />
        <PropertyList />
        <Footer />
      </div></div>
}

export default Listings
