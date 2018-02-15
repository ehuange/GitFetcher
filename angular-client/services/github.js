angular.module('app')
.service('github', function($http) {
    this.search = function(callback) {
        $http.get('http://127.0.0.1.1128/repos').then(function(data) {
            callback(data);
        })
    }
})