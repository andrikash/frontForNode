import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../components/TableComponents/pages/Table';
import { I18n } from 'react-redux-i18n';


export default class ProductPage extends Component {
  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div className="row pb-2">
                        <h4 className="mb-0">{I18n.t('product.products_list')}</h4>
                        <Link to="/product/add" className="btn btn-success ml-auto">{I18n.t('product.add_product')}</Link>
                    </div>
                    <Table columnNames={[I18n.t('product.name'), I18n.t('product.price'), I18n.t('product.description')]}/>
                </div>
            </div>
        </div>
    )
  }
}
