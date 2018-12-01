import React, { Component } from 'react';


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
                <a href={`/editProduct/${_id}`} className="btn btn-info mr-3">Edit</a>
                <button className="btn btn-danger" onClick={this.props.deleteProduct}>Delete</button>
            </td>
          </tr>
      
    )
  }
}

