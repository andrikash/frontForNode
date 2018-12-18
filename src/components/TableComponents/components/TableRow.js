import React, { Component } from 'react';
import '../style/tableRow.scss';
import { I18n } from 'react-redux-i18n';

export default class TableRow extends Component {
  render() {
    const { productName, price, about, _id } = this.props;
    return (
          <tr>
            <td>{ productName }</td>
            <td>{ price }</td>
            <td>{ about }</td>
            <td>
                <a href={`/product/edit/${_id}`} className="btn btn-info mr-3">{I18n.t('table.edit')}</a>
                <button className="btn btn-danger" onClick={this.props.deleteProduct}>{I18n.t('table.delete')}</button>
            </td>
          </tr>
      
    )
  }
}

