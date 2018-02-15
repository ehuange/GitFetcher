angular.module('app')
.component('search', {
  controller: function($http) {
      this.handleClick = function() {
        $http.post('/repos', {query: this.terms}).then(function(success) {
          console.log(`Fetching repos`);
        }, function(error) {
          console.log(error);
        });
    } 
  },

  bindings: {},

  templateUrl: '/templates/search.html'

});