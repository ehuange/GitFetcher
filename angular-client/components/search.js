angular.module('app')
.component('search', {
  controller: function($http, github) {
    
  },

  bindings: {
    service: '<',
    reload: '<'
  },

  templateUrl: '/templates/search.html'

});