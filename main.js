const form = document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const atividades = []; //array
const notas = []; //array
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat (prompt('Digite a nota minima:'));




let linhas = ' '; //esse linha faz com que sejam adicionadas um input de dado em baixo do outro, mas dai pra funcionar ela precisa estar aqui em cima de forma global


form.addEventListener('submit' , function(e){   //atualizar as tabelas
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
}); 

function adicionaLinha(){ //essa função apenas adiciona linhas a minha tabela
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){ //esse if corrige o bug de colocar o mesmo nome de aluno
        alert(`a atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value); //esta linkado ao array
        notas.push(parseFloat (inputNotaAtividade.value)); //esta linkado ao array - Precisou colocar o parsefloat pq os numeros estavam como string e não como numeros, isso deu pra ver no console do navegador

        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value} </td>` ;
        linha += `<td> ${inputNotaAtividade.value} </td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`; //  ? significa if e  : significa else
        linha += '</tr>';

        linhas += linha;
    }

    inputNotaAtividade.value = ' '; //essa duas linhas limpam o campo após a adição do conteudo
    inputNotaAtividade.value = ' ';
}//cria um evento de sumibssão do formulário, o function (e) impede que o formulario quando submetido sem nenhum dado não atualize a tela//

function atualizaTabela(){
    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){ //essa função vai somar as notas e depois fazer a média
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i=0; i< notas.length; i++){ //isso é um laço de repetição
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
