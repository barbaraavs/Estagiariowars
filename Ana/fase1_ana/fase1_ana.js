var escolha = prompt ("Escolha o que fazer. \n Digite 1 para sugerir novas opções de dietas \n Digite 2 para ser vergoin di profission.");
var alerta1 = 0;
var alerta2 = 1;

selecionarEscolha (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para sugerir novas opções de dietas \n Digite 2 para ser vergoin di profission.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function selecionarEscolha (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_ana">
            <h1>Você conseguiu aprovação da chef para testar novas receitas uma vez por semana.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase2_ana/escolha2_ana.html">Parrabns Chef</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_ana">
            <h1>Você fica com medo de sugerir mudanças e é a vergoin di profission.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
                </div>
            </div>`)
    }
    return escolha;
}

function voltaInicio (_escolha){
    document.write(`
    <div class="fase_ana">
    <h1>Máximo de tentivas excedidas. Volte ao início.</h1>
        <div class = "seguir">
        <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
        </div>
    </div>`)
}