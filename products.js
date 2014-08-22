(function() {
  var app = angular.module('store-products',[]);
  app.directive('productPanels', function() {
    return {
      restrict:'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        this.tab = 1;

        this.setCurrent = function(setTab) {
          this.tab = setTab;
        };

        this.isCurrent = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panels'
    };
  });
})();
