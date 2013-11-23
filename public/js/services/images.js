//Images service used for images REST endpoint
angular.module('mean.images').factory("Images", ['$resource', function($resource) {
    return $resource('images/:imageId', {
        imageId: '@_id'
    }, {
        update: {
            method: 'GET'
        }
    });
}]);