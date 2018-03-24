angular.module("notas").factory("notasAPI", function($http, config){
    var _list = function(){
        return $http.get(config.baseUrl + "/notas/list");
    };
    var _save = function(nota){
        return $http.post(config.baseUrl + "/notas/save",nota);
    };
    var _delete = function(id){
        return $http.delete(config.baseUrl + "/notas/delete/"+id);
    };
    return {
        list : _list,
        save : _save,
        delete : _delete
    };
});