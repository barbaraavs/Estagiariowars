var escolha = prompt ("Escolha o que fazer. \n Digite 1 para aceitar o período de testes \n Digite 2 para continuar somente no setor de tecnologia.");
var alerta1 = 0;
var alerta2 = 2;

oQueFazer (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para aceitar o período de testes \n Digite 2 para continuar somente no setor de tecnologia.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazer (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_joao">
            <h1>Você aceita esse período e aprende diversas áreas e setores da empresa antes desconhecidas. O menino do café começa a desbravar o mundo (ou a empresa).</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase3_joao/escolha3_joao.html">Você descobriu novos talentos.</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_joao">
            <h1>Você continua seu estágio, mas está um pouco entediado desde que substituíram o coador de café por uma máquina de café elétrica.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
                </div>
            </div>`)
    }
    return escolha;
}

function voltaInicio (_escolha){
    document.write(`
    <div class="fase_joao">
    <h1>Máximo de tentivas excedidas. Volte ao início.</h1>
        <div class = "seguir">
        <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
        </div>
    </div>`)
}