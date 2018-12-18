import React, { Component } from 'react';
import TableRow from './TableRow';
import { connect } from 'react-redux';
import { productsAction, productsDelete } from '../../../Modules/Products/store/actions/products';
import ModalWindow from '../../ModalWindow/ModalWindow';
import { I18n } from 'react-redux-i18n';
// import '../style/tableRow.scss';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            productName: null,
        }
        this.activeProductId = null;
        
    }
    componentDidMount() {
        const { productsGetAll } = this.props;
          productsGetAll();
      }
    openModal = (id, productName) => {

          this.setState({
              activeProductId: id,
              modalIsOpen: true,
              productName: productName,
          });
      }
    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }
    submitModal = (id) => {
        const { productsDelete } = this.props;
        productsDelete(id);
        
        this.setState({
            modalIsOpen: false
        })
    }
    handleSubmit = () => {
        return this.submitModal(this.state.activeProductId)
    }
    renderColumns = () => {
        const { columnNames } = this.props;
        return(
            <>
                {columnNames.map((name, i) =>
                    <th key={i}>{name}</th>
                )}
            </>
        )
    }
    renderTableRows = () => {
    const { products } = this.props;
        return (
            <>
                {products.data.map((product) =>
                    <TableRow key={product._id} {...product} deleteProduct={()=>this.openModal(product._id, product.productName)}/>
                )}
            </>
        )
    }
  render() {
    return (
        <div className="table-responsive">
        <ModalWindow show={this.state.modalIsOpen} close={this.closeModal} submit={this.handleSubmit} title={I18n.t('modal.title', {product_name: this.state.productName})} text={I18n.t('modal.text')}/>
        <table className="table table-bordred table-striped">
            <thead>
                <tr>
                    {this.renderColumns()}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderTableRows()}
            </tbody> 
        </table> 
    </div>   
    )
  }
}
const mapStateToProps = state => ({
    products: state.products,
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetAll: () => dispatch(productsAction()),
    productsDelete: (id) => dispatch(productsDelete(id)),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);
