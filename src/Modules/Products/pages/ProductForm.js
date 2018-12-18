import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsGetOne, productUpdate, productAdd } from '../store/actions/products';
import { I18n } from 'react-redux-i18n';
import { fields } from '../constants/inputConstants';



class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: {}
        }
    }
    renderFields = (fields) => fields.map((field,i) => {
        const value = this.state.currentProduct[field.name];
            return(
                <span key={i}>
                    <label>{I18n.t(field.label)}</label>
                        <input
                        type={ field.type }
                        name={ field.name }
                        className="form-control"
                        placeholder={ I18n.t(field.label) }
                        onChange={ (e) => this.changeState(e) }
                        value={ !!value ? value : '' }
                            >
                        </input>
                </span>
            )
    })
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
            const { productName, price, about } = this.state.currentProduct;
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
        const { payload } = this.props;
        return (
            <div className="container col-4">
                <div className="form-group">
                    <h2>{payload}</h2>
                    {this.renderFields(fields)}
                    <button type="button" onClick={this.handleSubmit} className="btn btn-info mt-3">{payload}</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({products}) => ({
    products
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetOne: (id) => dispatch(productsGetOne(id)),
    productUpdate: (id, data) => dispatch(productUpdate(id, data)),
    productAdd: (data) => dispatch(productAdd(data)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
