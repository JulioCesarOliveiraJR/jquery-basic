
$(function(){
    $('.jquery').html("jQuery - Aula 02 - É Preciso debugar");

    console.log("Aula 02 - via console do navegador"); //Uma mensagem para ser exibida no conlose para logs

    console.info("o jQuery foi carregado com sucesso!"); //Gerando uma informação

    console.warn("Uma mensagem de alerta");

    console.error("Uma mensagem de erro");


    var cadastro = false; // Criado uma variavel com valor false para validação do cadastro

    /* Agrupando mensagns */
    console.group("Cadastro de usuários");
    console.info("Cadastro iniciado!");
    //Validação sem uso do IF
    console.assert(cadastro === true, "Cadastro Realizado"); //assert me permite fazer uma validação (como se fosse um IF, mas não tem opção do ELSE)

    //validação com IF - ELSE
    if(cadastro === true){
        console.log("Cadastro Realizado");
    }else{
        console.warn("Cadastro não realizado");
    }

    console.groupEnd; //Finalizado o agrupamento das mensagens
});