import React, { Component } from 'react';
import history from '../utils/history';
import * as api from '../utils/api';
import { connect } from 'react-redux';
import { productsGetOne } from '../store/actions/products';

class ProductPage extends Component {
    
    constructor(){
        super();
        // Remove
        this.state = {
            form: {
                productName: null,
                price: null,
                description: null
            }
        }
        ////
    }
    //Current product
    componentDidMount(){
        // Redux! Remvoe it at all
        const { id } = this.props.match.params;
        if(Boolean(id)){
            productsGetOne(id);
        }
        ////
    }
    handleSubmit = e => {
        e.preventDefault(); // Remove
        const id = this.props.match.params.id; // Remove, Use Redux
        const { productName, price, description } = e.target // Remvoe, Use Redux
        console.log(productName.value, price.value, description.value);
        if(Boolean(id)) {
            api.Product.updateProduct(id,{
                productName: productName.value,
                price: price.value,
                about: description.value
            }).then(() => {
                history.push("/productPage")
            })
        }else {
            api.Product.addProduct({ 
                productName: productName.value,
                price: price.value,
                about: description.value
            }).then(response => console.log(response),
                history.push("/productPage")
            )
        }
        ////
        }  
        changeState = (ev) => {
            this.setState({
                form: {
                    productName: ev.currentTarget.value.productName,
                    price: ev.currentTarget.value.price,
                    about: ev.currentTarget.value.description
                }
            })
        }
    render() {
    const { products } = this.props;
        return (
            <div className="container col-8">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h2>{this.props.payload} new product</h2>
                        <label>Product name</label>
                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder="Product name"
                        onChange={this.changeState}
                        value={products.productName}
                        >
                        </input>

                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                        onChange={this.changeState}
                        value={products.price}
                        >
                        </input>

                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Discription"
                        onChange={this.changeState}
                        value={products.description}
                        >
                        </input>
                        <button type="submit" className="btn btn-info mt-3">{this.props.payload} product</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetOne: () => dispatch(productsGetOne())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
