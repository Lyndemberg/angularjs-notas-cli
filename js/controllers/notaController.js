angular.module("notas").controller("notasController",function($scope,$http,$window,notasAPI){               
    $scope.nota = {};

    notasAPI.list().then(function (response) {
        $scope.notas = response.data;
    },function(response){
        console.log(response.statusText);
    });

    $scope.salvar = function(nota){
        notasAPI.save(nota).then(function(response){
            alert(response.data);
            $window.location.reload(true);
        },function(response){
            alert(response.data);
        });
    }
    $scope.excluirNota = function(id){
        notasAPI.delete(nota).then(function(response){
            alert(response.data);
            $window.location.reload(true);
        },function(response){
            alert(response.data);
        });
    }
    
    $scope.atualizarNota = function(nota){
        alert(nota.descricao);
        //$http.put('http://localhost:8081/notes-core/rest/notas/edit',$scope.nota)
        //.then(function(response){
         //   alert(response.data);
        //},function(response){
          //  alert(response.data);
        //});
    }
});
