import React, { Component } from 'react';
import TableRow from './TableRow';
import { connect } from 'react-redux';
import { productsAction, productsDelete } from '../../../Modules/Products/store/actions/products';
import ModalWindow from '../../ModalWindow/page/ModalWindow';
import { I18n } from 'react-redux-i18n';
import '../style/tableRow.scss';

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false,
        }
        this.activeProductId = null;
        this.productName = null;
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
  render() {
    const { products } = this.props;
    return (
        <div class="table-responsive">
        <ModalWindow show={this.state.modalIsOpen} close={this.closeModal} submit={()=>this.submitModal(this.state.activeProductId)} title={I18n.t('modal.title', {productName: this.state.productName})} text={I18n.t('modal.text')}/>
        <table class="table table-bordred table-striped">
            <thead>
                <tr>
                    {
                        this.props.columnNames.map((name) =>
                            <th>{name}</th>
                    )}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.data.map((product) =>
                    <TableRow {...product} deleteProduct={()=>this.openModal(product._id, product.productName)}/>
                )}
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
