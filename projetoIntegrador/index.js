 
//  PRIMEIRO TIPO DE VALIDAÇÃO - TESTE
 document.getElementById('preencherFunc').addEventListener('submit', function(event) {
     var email = document.getElementById('email');
     var padrao = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

     if (email.value.match(padrao)) {
         email.classList.remove('invalido');
     } else {
         event.preventDefault();
         email.classList.add('invalido');
     }
 });


// SEGUNDO TIPO DE VALIDAÇÃO - TESTE
const btn = document.querySelector("#senha");

 btn.addEventListener("click", function(s){
    s.preventDefault()
    
     const email = document.querySelector("#email");
     const value = senha.value;

     console.log(value);

})



// TERCEIRO TIPO DE VALIDAÇÃO - TESTE
 function preencherFunc(){
     const email = document.querySelector("#email").value;
     const senha = document.querySelector("#senha").value;

     // validação dos campos preenchidos
     if( email == "" || senha == "" ){
         alert("erro")
     }
     // validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     // validação da senha
     if(emailRegex.test(email)){
         alert("e-mail inválido")
    }
    // validação da senha

    if(senha.length > 8){
         alert("Limite de caracteres excedido!")
    }

    console.log(value);

}

