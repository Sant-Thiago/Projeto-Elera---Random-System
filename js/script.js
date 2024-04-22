const check1 = document.getElementById('check_1');
const check2 = document.getElementById('check_2');
const check3 = document.getElementById('check_3');

const container = document.getElementById('container');

if (check1.checked) {

    // layoutInserir();
    // check2 = //função para deixar 45%-60% transparente, e bloquear o acesso do usuario; 
    // check3 = //função para deixar 60%-80% transparente, e bloquear o acesso do usuario;

} else if (check2.checked) {
    // check2 = //função mudar a cor do check e permite voltar para o check1
    // check3 = //função para deixar 60%-80% transparente, e bloquear o acesso do usuario;

} else {
    // check3 = //função mudar a cor do check e permite voltar para o check1 e check2

};

function layoutQuantidade() {
    container = `
    AI VOCE DESENROLA DESSE EM DIANTE

    USA O LAYOUT DA FUNÇÂO ANTERIOR
    `
}

function lerCSV(arquivo) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();

        reader.onload = function (event) {
            var conteudo = event.target.result; 
            var linhas = conteudo.split('\n'); 

            var dados = [];
            linhas.forEach(function (linha) {
                var colunas = linha.split(',');
                dados.push(colunas); 
            });

            resolve(dados); 
        };

        reader.readAsText(arquivo);
    });
}

document.getElementById('iptArquivo').addEventListener('change', async function (event) {
    var arquivo = event.target.files[0];

    try {
        var dadosCSV = await lerCSV(arquivo);
        preencherTextArea(dadosCSV);
    } catch (erro) {
        console.error('Erro ao ler o arquivo CSV:', erro);
    }
});

function preencherTextArea(dados) {
    var textArea = document.getElementById('txtDados');
    textArea.value = '';

    dados.forEach(function (linha) {
        textArea.value += linha.join('\t') + '\n';
    });
}

