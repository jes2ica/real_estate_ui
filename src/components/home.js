import React from 'react';
import Footer from './global/footer';
import Navbar from './global/navbar';
import Search from './sections/search';

const Home = () => {
    return <div id="page-wrapper">
      <div class="row">
        <Navbar />
        <Search />
        <Footer />
      </div></div>
}

export default Home
