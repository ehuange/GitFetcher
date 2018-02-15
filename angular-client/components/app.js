angular.module('app')
.component('app', {
  controller: function($http, github) {
    this.repos = [];
    this.$onInit = () => {
      this.reload();
    }
    let ctrl = this;
    this.searchService = (input) => {
      $http.post('/repos', {query: input}).then(function(success) {
        console.log(`Fetching repos`);
      }, function(error) {
        console.log(error);
      })
    };

    this.reload = () => {
      github.search(function(data) {
        console.log(data);
        ctrl.repos = data.data;
      });
    }
    
  },
  bindings: {
    service: '<',
  },
  templateUrl: '/templates/app.html'
});