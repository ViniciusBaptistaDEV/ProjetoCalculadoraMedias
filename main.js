const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji feliz"></img>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"></img>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima: '));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinhas();
    atualizatabela();
    atualizaMediaFinal();
});

function adicionalinhas() {

    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputnomeatividade.value.toLowerCase())) {
        alert(`A atividade: ${inputnomeatividade.value} já foi inserida!`);
    } else {

        atividades.push(inputnomeatividade.value);
        notas.push(parseFloat(inputnotaatividade.value));

        let linha = '<tr>'
        linha += `<td>${inputnomeatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputnomeatividade.value = '';
    inputnotaatividade.value = '';
}

function atualizatabela() {

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {

    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    };

    return somaNotas / notas.length;
}
