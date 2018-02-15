angular.module('app')
.component('repoList', {
  controller: function() {},
  bindings: {
    repos: '<',
    data: '<'
  },
  templateUrl: '/templates/repo-list.html'
});
