var escolha = prompt ("Escolha o que fazer a seguir. \n Digite 1  para conversar com o chefe e ver possíveis oportunidades de emprego \n Digite 2 para ficar com medo e não tentar.");
var alerta1 = 0;
var alerta2 = 1;

tentarEmprego (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer a seguir. \n Digite 1  para conversar com o chefe e ver possíveis oportunidades de emprego \n Digite 2 para ficar com medo e não tentar.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function tentarEmprego (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_joao">
            <h1>Você descobre que precisa passar por alguns testes e seu chefe te desafia a conhecer mais outras áreas da empresa.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase2_joao/escolha2_joao.html">Isso é um bom sinal! Continue.</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_joao">
            <h1>Você decide que é melhor ficar quieto e acaba perdendo uma grande oportunidade.</h1>
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