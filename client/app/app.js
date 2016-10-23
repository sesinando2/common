window._ = require('underscore');

import 'restangular';
import Service from './service/service';

angular.module('common', [
  Service,
  'restangular'
])

.constant('api', 'http://localhost:8080/api')

.config((RestangularProvider, api) => {
  "ngInject";

  RestangularProvider.setBaseUrl(api);

  RestangularProvider.setDefaultHttpFields({
    'withCredentials': true
  });
});

