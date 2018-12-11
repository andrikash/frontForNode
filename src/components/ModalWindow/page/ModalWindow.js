import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';

export default class ModalWindow extends Component {


  render() {
      const { show, title, text } = this.props;
      const showHideClassName = show ? "modal d-block" : "modal d-none";
    return (
      <div className={showHideClassName} >
         <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{ title }</h5>
                    <button type="button" class="close" onClick={this.props.close} >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{ text }</p>
                </div>
                <div class="modal-footer">
                    <button onClick={ this.props.submit } className="btn btn-primary">{I18n.t('modal.delete')}</button>
                    <button onClick={ this.props.close } className="btn btn-secondary">{I18n.t('modal.close')}</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}