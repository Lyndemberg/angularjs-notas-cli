angular.module("notas").filter("limitTexto",function(){
    return function(input,tamanho){
        if(input.length > tamanho){
            var saida = input.substring(0,tamanho) + "...";
            return saida;
        }else{
            return input;
        }
    }
});