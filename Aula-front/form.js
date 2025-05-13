document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault(); // impede o envio do formulário

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("e-mail").value;
        const fone = document.getElementById("fone").value;
        const mensagem = document.getElementById("mensagem").value;
        const cadastro = document.getElementById("data_cadastro").value;
        const tipoContato = document.getElementById("tipo_contato").value;

        // Insere os valores na tabela (grid)
        const tabela = document.getElementById("grid");
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${fone}</td>
            <td>${mensagem}</td>
            <td>${cadastro}</td>
            <td>${tipoContato}</td>
        `;

        // Limpa o formulário
        document.getElementById("formulario").reset();
    });
});
