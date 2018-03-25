angular.module("notas").config(function($routeProvider){
    $routeProvider.when("/notas",{
        templateUrl : "views/notas.html",
        controller : "notasController"
    }); 
    $routeProvider.when("/novaNota",{
        templateUrl : "views/novaNota.html",
        controller : "notasController"
    }); 
    $routeProvider.otherwise({
        redirectTo : "/notas"
    });
});