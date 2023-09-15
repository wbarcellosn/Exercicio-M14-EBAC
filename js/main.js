$(document).ready(function () {

    //Mascaras

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Digite seu telefone'
    })

    $('form').validate({

        rules: {

            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            mensagem: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu e-mail.',
            mensagem: 'Por favor, insira sua mensagem.'
        },

    })

})


