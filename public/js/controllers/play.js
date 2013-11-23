angular.module('mean.system').controller('PlayController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    var fabric = window.fabric
    $scope.global = Global;

    $scope.canvas = (function (fabric){
		var canvas = this.__canvas = new fabric.Canvas('shard', {
			    isDrawingMode: true
			  });
		canvas.setHeight(window.innerHeight - 250);
		canvas.setWidth(window.innerWidth -50);
		canvas.on("after:render", function(){canvas.calcOffset();});
		return canvas
	})(fabric)


    $scope.current_color = 'black'

    $scope.tools = [
    		{
    			'name': 'Pencil',
    			'run': function(){
    				$scope.canvas.freeDrawingBrush = new fabric.PencilBrush($scope.canvas);
    				$scope.canvas.freeDrawingBrush.color  = $scope.current_color
    			}
    		},
    		{
    			'name': 'Eraser',
    			'run': function(){
    				$scope.current_color = $scope.canvas.freeDrawingBrush.color;
    				$scope.canvas.freeDrawingBrush = new fabric.PencilBrush($scope.canvas);
    				$scope.canvas.freeDrawingBrush.color = 'white';
    				$scope.canvas.freeDrawingBrush.width = 25;

    			}
	    	},
	    	{
    		'name': 'Spray',
    		'run': function(){
    			$scope.canvas.freeDrawingBrush = new fabric.SprayBrush($scope.canvas)
    			$scope.canvas.freeDrawingBrush.color  = $scope.current_color
    			$scope.canvas.freeDrawingBrush.density = 50;
    			}
    		}

	   	]

	$scope.colors = [
			'blue', 'red', 'green', 'yellow', 'black', 'white', 'whitesmoke'
		]

	$scope.save = function(canvas){
		var image = canvas.toDataURL()
	}
   
}]);