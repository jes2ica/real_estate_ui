import React from 'react';
import Footer from './global/footer';
import Navbar from './global/navbar';
import Property from './sections/property';

const Details = () => {
    return <div id="page-wrapper">
      <div class="row">
        <Navbar />
        <Property />
        <Footer />
      </div></div>
}

export default Details
