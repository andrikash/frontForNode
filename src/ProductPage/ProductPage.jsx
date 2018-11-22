import React, { Component } from 'react'
import axios from 'axios';

export default class ProductPage extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const { productName, price, description } = e.target
        const token = localStorage.getItem('token');
        console.log(token);
        axios.post('http://localhost:8080/api/v1/products', {
            productName: productName.value,
            price: price.value,
            about: description.value
        },
            {
                headers: {
                    authorization: 'bearer ' + token
                }
            }).then(response => console.log(response))
    }
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
