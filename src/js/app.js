var app = angular.module("empApp", ["ngRoute", "ui.bootstrap"]);
app.config(routeConfig);
function routeConfig($routeProvider) {
    $routeProvider
        .when("/home", {
        templateUrl: "src/app/views/home.html",
        controller: "homeController",
        controllerAs: "vm"
    })
        .when("/employee", {
        templateUrl: "src/app/views/employeeList.html",
        controller: "employeeController",
        controllerAs: "vm"
    })
        .when("/employeeDetails", {
        templateUrl: "src/app/views/employeeDetails.html",
        controller: "employeeController",
        controllerAs: "vm"
    })
        .otherwise("/home");
}
// function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
//     $stateProvider.state('home', {
//         url: "/home",
//         template: "<h1>Home Page</h1>"
//     });
//     $urlRouterProvider.otherwise("/home");
// } 
