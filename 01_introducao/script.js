/* 
    Existem diversas formas de inicializar o jquery.
    Primeira maneira - Essa meneira ele lê o documento inteiro, e só depois executa o script (Maneira padrão) 
    
    FORMA PADRÃO DE INICIALIZAR O jQUERY */
// $(document).ready(function(){  //Quando o documento (document) estiver pronto (ready) executa o script
//     alert("Olá Mundo!"); // Disparando um alert
// });


/* 
    Segunda maneira - Também só executa depois de carregar o documento 
    FORMA PADRÃO DE INICIALIZAR O jQUERY SIMPLIFICADA
*/
// $(function(){
//     alert("Olá Mundo!"); // Disparando um alert
// });

/*
    CARREGANDO ANTES DE OUTRA LIB (quando você vai ter outra biblioteca JS no seu projeto, mas a do Jquery vem primeiro)
 */
//jQuery(function($){ // Aqui se coloca no nome da biblioteca e passa ela no parametro, assim tudo que estiver dentro dessa função é do Jquery
//    alert("jQuery Antes de Outra Lib!");
//});

/*
 * CARREGANDO DEPOIS DE OUTRA LIB (quando você vai ter outra biblioteca JS no seu projeto, mas a do Jquery vem depois)
 */
//var $j = jQuery.noConflict(); // Colocamos toda a biblioteca dentro do $j
//$j(document).ready(function(){ //E disparamos o jquery atraves da variavel $j e não mais só $
//    alert("jQuery Depois de Outra Lib!");
//});

$(function(){
    alert("Olá Mundo!"); // Disparando um alert
});