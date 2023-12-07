const formulario = document.querySelector("#formulario");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// // validação
 formulario.addEventListenerr("submit", (event) => {
    event.preventDefault();

// // Se estiver vazio
     if(email.value === "" || password.value === "" || isEmailValid(email.value)){
         alert("Insira todos os dados");
         return;

    }

 // verificar email

// // se estiver tudo preenchido
     formulario.submit();
 })

 // regex para validar email
 function isEmailValid(email){
     const emailRegex = new RegExp(
         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
     );

     if(emailRegex.test(email)){
         return true
     }

     return false;
 }

// function validacaoFormulario(){
//     const email = document.querySelector("#email").value;
//     const senha = document.querySelector("#senha").value;

//     // validação dos campos preenchidos
//     if( email == "" || password == "" ){
//         alert("erro")
//     }
//     // validação do e-mail
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     // validação da senha
//     if(emailRegex.test(email)){
//         alert("Digite um e-mail válido")
//     }
//     // validação da senha
//     if(senha.length > 8){
//         alert("Senha inválida por conter muitos caracteres")
//     }

// }