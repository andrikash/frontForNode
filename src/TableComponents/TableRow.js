import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalWindowTemp from '../ModalWindow/ModalWindowTamp';

export default class TableRow extends Component {
  render() {
    const { productName, price, about, _id } = this.props;
    console.log(productName, price, about, _id, 8888);
    return (
      
          <tr>
            <td>{ productName }</td>
            <td>{ price }</td>
            <td>{ about }</td>
            <td>
                <ModalWindowTemp text='You will not be able to revert this!' title={`Are you sure to delete ${productName} ?`} id={_id}/>
                <Link to={`/editProduct/${_id}`} className="btn btn-info mr-3">Edit</Link>
                <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModalLong">Delete</button>
            </td>
          </tr>
      
    )
  }
}

