function validacaoFormulario(){
     const email = document.querySelector("#email").value;
     const password = document.querySelector("#password").value;

     // validação dos campos preenchidos
     if( email === "" || password === "" ){
         alert("preencha os campos")
     }
     // validação do e-mail
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
          // validação da senha
     if(emailRegex.test(email)){
         return true
     }
 }