import React, { Component } from 'react';
import history from '../utils/history';
import { connect } from 'react-redux';
import { productsGetOne, productUpdate, productAdd } from '../store/actions/products';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: null
        }
    }
    //Current product
    componentDidMount(){
        const { id } = this.props.match.params;
        if(Boolean(id)){
            const { productsGetOne } = this.props;
            productsGetOne(id);
        }
    }
    handleSubmit = () => {
        const { id }  = this.props.match.params;
        const { productName, price, description } = this.state.currentProduct;
        const { productUpdate, productAdd } = this.props;

        if(Boolean(id)) {
            const { productName, price, description } = this.state.currentProduct;
            return productUpdate(id,{
                productName,
                price,
                about: description
            }).then(() => {
                history.push("/productPage")
            })
        }
            return productAdd({
                productName,
                price,
                about: description
            }).then(() => {
                 history.push('/productPage');
            });
        }
        changeState = (ev) => {
            const { name, value } = ev.target;

            this.setState(prevState => ({
                ...prevState,
                currentProduct: {
                    ...prevState.currentProduct,
                    [name]: value,
                }
            }))
        }
        componentWillReceiveProps(newProps) {
            console.log(newProps.products.currentProduct, 'PRODUCTS');
            if (newProps.products.currentProduct) {
                this.setState({ currentProduct: newProps.products.currentProduct })
            }
        }
        
    render() {
    const { productName = null, price = null, about = null } = this.state.currentProduct || {};
    console.log(this.state.currentProduct, 'qqq')
        return (
            <div className="container col-8">
                    <div className="form-group">
                        <h2>{this.props.payload} new product</h2>
                        <label>Product name</label>
                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder="Product name"
                        onChange={(e) => this.changeState(e)}
                        value={productName}
                        >
                        </input>

                        <label>Price</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                        onChange={this.changeState}
                        value={price}
                        >
                        </input>

                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Discription"
                        onChange={this.changeState}
                        value={about}
                        >
                        </input>
                        <button type="button" onClick={this.handleSubmit} className="btn btn-info mt-3">{this.props.payload} product</button>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetOne: (id) => dispatch(productsGetOne(id)),
    productUpdate: (id, data) => dispatch(productUpdate(id, data)),
    productAdd: (data) => dispatch(productAdd(data)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
