angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [
    {
    	"title": "Play!",
    	"link": "play"
    }, {
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    }, {
        "title": "Images",
        "link": "images"
    }
    ];
    
    $scope.isCollapsed = false;
}]);