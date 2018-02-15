angular.module('app')
.component('search', {
  controller: function($http, github) {
      this.handleClick = function() {
        $http.post('/repos', {query: this.terms}).then(function(success) {
          console.log(`Fetching repos`);
        }, function(error) {
          console.log(error);
        })
    } 
  },

  bindings: {
    service: '<'
  },

  templateUrl: '/templates/search.html'

});