angular.module('app')
.component('app', {
  controller: function($http, github) {
    this.repos = [];
    
  },
  bindings: {
    service: '<'
  },
  templateUrl: '/templates/app.html'
});