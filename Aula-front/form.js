document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault(); 


        const nome = document.getElementById("nome").value;
        const email = document.getElementById("e-mail").value;
        const fone = document.getElementById("fone").value;
        const mensagem = document.getElementById("mensagem").value;
        const cadastro = document.getElementById("data_cadastro").value;
        const tipoContato = document.getElementById("tipo_contato").value;

       
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

        document.getElementById("formulario").reset();
    });
});
