import AuthenticationService from './authentication.service';

let serviceModule = angular.module('common.service', [])

.service('authenticationService', AuthenticationService)

.name;
export default serviceModule;
