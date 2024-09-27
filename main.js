const form = document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';


let linhas = ' '; //esse linha faz com que sejam adicionadas um input de dado em baixo do outro, mas dai pra funcionar ela precisa estar aqui em cima de forma global


form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value} </td>` ;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`; //  ? significa if e  : significa else
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

    inputNotaAtividade.value = ' '; //essa duas linhas limpam o campo após a adição do conteudo
    inputNotaAtividade.value = ' ';
}); //cria um evento de sumibssão do formulário, o function (e) impede que o formulario quando submetido sem nenhum dado não atualize a tela//



