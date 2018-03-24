angular.module("notas").factory("notasAPI", function($http){
    var _list = function(){
        return $http.get('http://localhost:8081/notes-core/rest/notas/list');
    };
    var _save = function(nota){
        return $http.post('http://localhost:8081/notes-core/rest/notas/save',nota);
    };
    var _delete = function(id){
        return $http.delete('http://localhost:8081/notes-core/rest/notas/delete/'+id);
    };
    return {
        list : _list,
        save : _save,
        delete : _delete
    };
});