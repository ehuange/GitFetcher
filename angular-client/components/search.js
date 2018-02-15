angular.module('app')
.component('search', {
  controller: function($http, github) {
    this.$onInit = () => {
      console.log(this);
    }
  },

  bindings: {
    service: '<',
    reload: '<'
  },

  templateUrl: '/templates/search.html'

});