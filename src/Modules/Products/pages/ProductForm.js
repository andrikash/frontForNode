import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsGetOne, productUpdate, productAdd } from '../store/actions/products';
import { I18n } from 'react-redux-i18n';


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
        const { productName, price, about } = this.state.currentProduct;
        const { productUpdate, productAdd } = this.props;

        if(Boolean(id)) {
            const { productName, price, description } = this.state.currentProduct;
            return productUpdate(id,{
                productName,
                price,
                about,
            })
        }
            return productAdd({
                productName,
                price,
                about,
            })
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
            if (newProps.products.currentProduct) {
                this.setState({ currentProduct: newProps.products.currentProduct })
            }
        }
    render() {
    const { productName = null, price = null, about = null } = this.state.currentProduct || {};

        return (
            <div className="container col-4">
                    <div className="form-group">
                        <h2>{this.props.payload}</h2>
                        <label>{I18n.t('product.name')}</label>
                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder={I18n.t('product.name')}
                        onChange={(e) => this.changeState(e)}
                        value={productName}
                        >
                        </input>

                        <label>{I18n.t('product.price')}</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder={I18n.t('product.price')}
                        onChange={this.changeState}
                        value={price}
                        >
                        </input>

                        <label>{I18n.t('product.about')}</label>
                        <input
                            type="text"
                            name="about"
                            className="form-control"
                            placeholder={I18n.t('product.about')}
                        onChange={this.changeState}
                        value={about}
                        >
                        </input>
                        <button type="button" onClick={this.handleSubmit} className="btn btn-info mt-3">{this.props.payload}</button>
                    </div>
                    {
                        this.props.products.error && <div className="alert alert-danger">{I18n.t('product.error')}</div>
                    }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products,
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetOne: (id) => dispatch(productsGetOne(id)),
    productUpdate: (id, data) => dispatch(productUpdate(id, data)),
    productAdd: (data) => dispatch(productAdd(data)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
