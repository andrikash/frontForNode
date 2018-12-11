import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import { logoutAction } from '../../../Modules/Auth/store/actions/auth';

class Navbar extends Component {
    logout = () => {
        const { logout } = this.props;
        logout();
    }
  render() {
      console.log('RENDER NAVBAR', this.props)
    const { isLogged } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light mb-3">
            <div className="navbar-header">
                <div className="navbar-brand">{I18n.t('navbar.title')}</div>
            </div>
                { !isLogged &&
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">{I18n.t('navbar.login')}</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/registration">{I18n.t('navbar.registration')}</a>
                        </li>
                    </ul>
                }
                { isLogged &&
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/user/edit">{I18n.t('navbar.edit_page')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products/page">{I18n.t('navbar.products_page')}</a>
                        </li>
                    </ul>
                }
                <div className="ml-auto row mr-2">
                    <div className="mr-2">
                        <select class="browser-default custom-select" onChange={ this.props.changeLanguage }>
                            <option value="uk" selected={ localStorage.lang ==='uk' ? true : false }>{I18n.t('navbar.language')} - UK</option>
                            <option value="ua" selected={ localStorage.lang ==='ua' ? true : false }>{I18n.t('navbar.language')} - UA</option>
                        </select>
                    </div>
                    { isLogged &&
                        <div>
                            <button type="button" className="btn btn-danger" onClick={this.logout}>{I18n.t('navbar.logout')}</button>
                        </div>
                    }
                </div>
        </nav>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    locale: state.i18n.locale,
    isLogged: state.auth.isLogged,
})
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction()),
  });
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
