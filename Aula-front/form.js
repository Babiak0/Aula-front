
const contato = {
    Enviarsubmeter: function () {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('mail').value;
        const fone = document.getElementById('fone').value;
        const mensagem = document.getElementById('mensagem').value;
        const dataCadastro = document.getElementById('data_cadastro').value;

        // Coleta os tipos de contato selecionados (checkbox)
        const tiposContato = [];
        document.querySelectorAll('input[name="tipo_contato"]:checked').forEach(input => {
            tiposContato.push(input.value);
        });

        // Referência à tabela
        const tabela = document.getElementById('grid');
        const novaLinha = tabela.insertRow();

        // Insere as células na linha
        novaLinha.insertCell(0).textContent = nome;
        novaLinha.insertCell(1).textContent = email;
        novaLinha.insertCell(2).textContent = fone;
        novaLinha.insertCell(3).textContent = mensagem;
        novaLinha.insertCell(4).textContent = dataCadastro;
        novaLinha.insertCell(5).textContent = tiposContato.join(', '); // separa por vírgula

        // Opcional: limpar os campos do formulário após envio
        document.querySelector('form').reset();
    }
};
