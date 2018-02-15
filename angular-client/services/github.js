angular.module('app')
.service('github', function($http) {
    this.search = function(callback) {
        $http.get('/repos').then(function(data) {
            callback(data);
        })
    }
})