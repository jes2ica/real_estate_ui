import React from 'react';
import Footer from './global/footer';
import Navbar from './global/navbar';
import Form from './sections/register';

const Register = () => {
    return <div id="page-wrapper">
      <div class="row">
        <Navbar />
        <Form />
        <Footer />
      </div></div>
}

export default Register
