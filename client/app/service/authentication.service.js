class AuthenticationService {

  /* @ngInject */
  constructor(Restangular) {
    this.restangular = Restangular;
    this.access = null;
  }

  login(username, password) {
    let result = null;
    if (!this.isLoggedIn()) {
      result = this._doLogin(username, password);
    } else {
      result = Promise.resolve(this.access);
    }
    return result;
  }

  logout() {
    let result = null;
    if (this.isLoggedIn()) {
      result = this._doLogout();
    } else {
      result = Promise.resolve();
    }
    return result;
  }

  isLoggedIn() {
    return this.access ? true : false;
  }

  _doLogin(username, password) {
    return this._authenticationEndpoint().customPOST({username, password})
      .then((response) => this._handleLoginResponse(response));
  }

  _handleLoginResponse(response) {
    this.access = response;
    return response;
  }

  _doLogout() {
    return this._logoutEndpoint().post().then(() => this._handleLogoutResponse());
  }

  _handleLogoutResponse() {
    this.access = null;
  }

  _authenticationEndpoint() {
    return this.restangular.one('login');
  }

  _logoutEndpoint() {
    return this.restangular.one('logout');
  }
}

export default AuthenticationService;
