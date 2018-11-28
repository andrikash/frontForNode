import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../TableComponents/Table';


export default class ProductPage extends Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div className="row pb-2">
                        <h4 className="mb-0">List of Product</h4>
                        <Link to="/addProduct" className="btn btn-success ml-auto">Add new product</Link>
                    </div>
                    <Table columnNames={['Product name', 'Price', 'Description']}/>
                </div>
            </div>
        </div>
    )
  }
}
