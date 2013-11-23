//Articles service used for articles REST endpoint
angular.module('mean.articles').factory("Articles", ['$resource', function($resource) {
	var obj = $resource('articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
	console.log(obj);
	return obj;
}]);