angular.module('mean.system').controller('PlayController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;

    $scope.currentTool = {
    	'name' : 'palette',
    	'options' : ['#FDFDFB', '#FFFA8B', '#FFFDD0', '#924F00', '#921800']
    };

    /********/

    $scope.create = function() {
        var article = new Images({
            title: 'test',
            content: 'image'
        });
        article.$save(function(response) {
            $location.path("articles/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    /********/

    /*

    GOOD LUCK WITH THIS:

    //my own fabric namespace obj
var f = f || {};

/*********** /
//http://fabricjs.com/freedrawing/
/*********** /

f.init = function() {
  var $ = function(id){return document.getElementById(id);};

  f.canvas = this.__canvas = new fabric.Canvas('shard', {
    isDrawingMode: true
  });

  f.canvas.setHeight(320);
  f.canvas.setWidth(320);
  f.canvas.setBackgroundImage(f.config.imgURL);
  f.canvas.on("after:render", function(){f.canvas.calcOffset();});

  fabric.Object.prototype.transparentCorners = false;

  var drawingModeEl = $('drawing-mode'),
      drawingOptionsEl = $('drawing-mode-options'),
      drawingColorEl = $('drawing-color'),
      drawingShadowColorEl = $('drawing-shadow-color'),
      drawingLineWidthEl = $('drawing-line-width'),
      drawingShadowWidth = $('drawing-shadow-width'),
      drawingShadowOffset = $('drawing-shadow-offset'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { f.canvas.clear(); };

  $('drawing-mode-selector').onchange = function() {
    f.canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](f.canvas);

    if (f.canvas.freeDrawingBrush) {
      f.canvas.freeDrawingBrush.color = drawingColorEl.value;
      f.canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      f.canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
  };

    */
}]);