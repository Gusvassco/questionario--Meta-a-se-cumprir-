function enviar(){
    //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
    var nomeValue = document.querySelector(".input-name").value;
    var emailValue = document.querySelector(".input-email").value;
    var cpfValue = document.querySelector(".input-cpf").value;
    var pagamentoValue = document.querySelector(".input-pagamento").value;

    var formValue = {                                 
        name: nomeValue,
        email: emailValue,
        data: {                                     
            cpf: cpfValue,                  
            pagamento: pagamentoValue      
        }
    };
    console.log(formValue);
}

