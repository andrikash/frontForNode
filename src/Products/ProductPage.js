import React, { Component } from 'react';
import axios from 'axios';

export default class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null
        }
    }
    
    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/v1/products',
            {
                headers: {
                    authorization: 'bearer ' + token
                }
            }).then((response) => {        
                this.setState({
                    products: response.data
                })
                console.log(response.data)
            })

    }
  render() {
    return (
        // <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        // <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        // <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        // <!------ Include the above in your HEAD tag ---------->
        
        // <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        // <script src="http://getbootstrap.com/dist/js/bootstrap.min.js"></script>
        
        <div class="container">
            <div class="row">
                
                <div class="col-md-12">
                    <div className="row pb-2">
                        <h4 className="mb-0">List of Product</h4>
                        <a href="/addProduct" className="btn btn-success ml-auto">Add new product</a>
                    </div>
                <div class="table-responsive">
    
         <table id="mytable" class="table table-bordred table-striped">
                 
            <thead>           
                <th>Product name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                { this.state.products && 
                this.state.products.map((product) => 
                    <tr>
                        <td>{ product.productName }</td>
                        <td>{ product.price }</td>
                        <td>{ product.about }</td>
                        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><a class="btn btn-primary btn-xs" href='/productPage/'>Edit</a></p></td>
                        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash">Delete</span></button></p></td>
                    </tr>
                    )
                }
            
            
            </tbody>
                
        </table>
    
        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
  }
}
