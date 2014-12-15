(function() {
    "use strict";
    angular.module("app.chart.ctrls", []).controller("jobclusterCtrl", ["$scope", "$http", function($scope, $http) {
        
            $http.get('http://api.indeed.com/ads/apisearch?publisher=3315082439122&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json').
              success(function(data, status, headers, config) {
                console.log(data);
                // this callback will be called asynchronously
                // when the response is available
              }).
              error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        
    }])
}).call(this),
    function() {
        "use strict";
        angular.module("app.chart.directives", []).directive("cluster", [function() {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function(scope, ele) {
                    var data, gauge, options;
                    return data = scope.data, options = scope.options, gauge = new Gauge(ele[0]).setOptions(options), gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val)
                }
            };

        }]);
    
}(this);