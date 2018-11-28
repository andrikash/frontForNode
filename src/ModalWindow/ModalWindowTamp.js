import React, { Component } from 'react';
import { productsDelete } from '../store/actions/products';
import { connect } from 'react-redux';
import history from '../utils/history';

class ModalWindowTamp extends Component {
  handleDelete = (id) => {
    console.log(id, 'Id in function')
    // const { productsDelete } = this.props;
    // productsDelete(id).then((res) => {
    //   history.push('/productPage');
    // });
  }
  render() {
    const { id } = this.props;
    console.log( id, 16555 );
    return (
      <div>
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{ this.props.title }</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                { this.props.text }
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-danger" onClick={() => this.handleDelete(id) }>Delete</button>
                <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  productsDelete: (id) => dispatch(productsDelete(id))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowTamp);