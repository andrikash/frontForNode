import React, { Component } from 'react';
import TableRow from './TableRow';
import { connect } from 'react-redux';
import { productsAction } from '../store/actions/products';

class Table extends Component {
    componentDidMount() {
        const { productsGetAll } = this.props;
          productsGetAll();
      }
  render() {
    const { products } = this.props;
    return (
        <div class="table-responsive">
        <table class="table table-bordred table-striped">
            <thead>
                {
                    this.props.columnNames.map((name) =>
                        <th>{name}</th>
                )}
                <th></th>
            </thead>
            <tbody>
                {
                    products.data.map((product) =>
                    <TableRow {...product}/>
                )}
            </tbody> 
        </table> 
    </div>   
    )
  }
}
const mapStateToProps = state => ({
    products: state.products
  });
  
  const mapDispatchToProps = dispatch => ({
    productsGetAll: () => dispatch(productsAction())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);
