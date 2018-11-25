import React, { Component } from 'react'
import axios from 'axios';
import history from '../utils/history';
// import { API_URL } from ''

export default class ProductPage extends Component {
    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/v1/products',{},{
            headers: {
                authorization: 'bearer ' + token
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { productName, price, description } = e.target
        const token = localStorage.getItem('token');
        // console.log(token);
        axios.post('http://localhost:8080/api/v1/products', {
            productName: productName.value,
            price: price.value,
            about: description.value
        },
            {
                headers: {
                    authorization: 'bearer ' + token
                }
            }).then(response => console.log(response),
                history.push("/productPage")
            )
        }  
    render() {
        return (
            <div className="container col-8">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h2>Add new product</h2>
                        <label>Product name</label>
                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder="Product name"
                        // onChange={this.changeState}
                        // value={this.state.form.name}
                        >
                        </input>

                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                        // onChange={this.changeState}
                        // value={this.state.form.name}
                        >
                        </input>

                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Discription"
                        // onChange={this.changeState}
                        // value={this.state.form.name}
                        >
                        </input>
                        <button type="submit" className="btn btn-info mt-3">Edit profile</button>
                    </div>
                </form>

                {/* Product list */}


            </div>
        )
    }
}
