function submeter(){
  var alerta = document.getElementById('nome').value;
  alert('Aviso: '+ alerta);
}

class Contato{
    constructor{
        nome = null
        email = null
        fone = null
        mensagem = null
        data_cadastro = date()
        tipo_contato = null
    }


    Enviar(){


        if (this.nome = ''){
            alert("ola");
        }

        nome = document.getElementById('nome').value;
        email = document.getElementById('email').value;
        fone = document.getElementById('fone').value;
        mensagem = document.getElementById('mensagem').value;
        data_cadastro = document.getElementById('data_cadastro').value;
        tipo_contato = document.getElementById('tipo_contato').value;

        alert('ola' + this.nome);
    }
}

contato = new Contato();