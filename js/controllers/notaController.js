angular.module("notas").controller("notasController",function($scope,$http,$location,notasAPI){               
    $scope.nota = {};
    $scope.notaAberta = {};
    notasAPI.list().then(function (response) {
        $scope.notas = response.data;
    },function(response){
        console.log(response.statusText);
    });

    $scope.abrirNota = function(nota){
        $scope.notaAberta = nota;
    }
    $scope.salvar = function(nota){
        notasAPI.save(nota).then(function(response){
            alert(response.data);
            $location.path("/notas");
        },function(response){
            alert("Não foi possível criar a nota");            
        });
    }
    $scope.excluirNota = function(id){
        notasAPI.delete(nota).then(function(response){
            alert(response.data);
        },function(response){
            alert("Não foi possível excluir a nota");
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
