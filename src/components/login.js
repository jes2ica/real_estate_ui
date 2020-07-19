import React from 'react';
import Footer from './global/footer';
import Navbar from './global/navbar';
import Form from './sections/login';

const Login = () => {
    return <div id="page-wrapper">
      <div class="row">
        <Navbar />
        <Form />
        <Footer />
      </div></div>
}

export default Login
