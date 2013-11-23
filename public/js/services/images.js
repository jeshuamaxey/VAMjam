//Articles service used for articles REST endpoint
angular.module('mean.system').factory("Images", ['$resource', function($resource) {
    return $resource('images/:imageId', {
        imageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);