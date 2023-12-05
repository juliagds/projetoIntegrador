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

