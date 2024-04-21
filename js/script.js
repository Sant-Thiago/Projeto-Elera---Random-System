const check1 = document.getElementById('check_1');
const check2 = document.getElementById('check_2');
const check3 = document.getElementById('check_3');

const container = document.getElementById('container');

if (check1.checked) {

    layoutInserir();
    // check2 = //função para deixar 45%-60% transparente, e bloquear o acesso do usuario; 
    // check3 = //função para deixar 60%-80% transparente, e bloquear o acesso do usuario;

} else if (check2.checked) {
    // check2 = //função mudar a cor do check e permite voltar para o check1
    // check3 = //função para deixar 60%-80% transparente, e bloquear o acesso do usuario;

} else {
    // check3 = //função mudar a cor do check e permite voltar para o check1 e check2

};


function layoutInserir() {
    container.innerHTML = `
    <div class="rotulo">
        <p>Escreva os itens</p>
        <span>*Separados por linha</span>
    </div>
    <textarea id="input" wrap="soft"></textarea>
    <div class="rotulo">
        <p>Upload do arquivo</p>
        <span>*.CSV</span>
    </div>
    <div class="arquivo">
        <label for="iptArquivo">
            Escolher Arquivo
            <input type="file" id="iptArquivo">
        </label>
    </div>
    <button>Continuar</button>
    `
}

function layoutQuantidade() {
    container = `
    AI VOCE DESENROLA DESSE EM DIANTE

    USA O LAYOUT DA FUNÇÂO ANTERIOR
    `
}
