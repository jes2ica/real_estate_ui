import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.props.history.push("/listings");
  }
  render() {
    return(
      <div className="overlay-black w-100 slider-banner1 position-relative slider-banner1-details">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-12">
                        <div className="text-white">
                            <h1 className="mb-4"><span className="text-primary">Find</span><br/>Your dream house</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 col-lg-2">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Any Types</option>
                                                <option>Appartment</option>
                                                <option>Condos</option>
                                                <option>House</option>
                                                <option>Commercial</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Any Status</option>
                                                <option>For Rent</option>
                                                <option>For Sale</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="validationDefault03" placeholder="Enter Address, Street and City or Enter State, Zip code" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-2">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary w-100">Search Property</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default withRouter(Search)
