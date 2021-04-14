var escolha = prompt ("Escolha seu meio de transporte. \n Digite 1 para ir a pé para o estágio  \n Digite 2 para ir de uber para o estágio.");
var alerta1 = 0;
var alerta2 = 1;

selecionarTransporte (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha seu meio de transporte. \n Digite 1 para ir a pé para o estágio  \n Digite 2 para ir de uber para o estágio.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function selecionarTransporte (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_maria">
            <h1>Você foi a pé para o estágio, chegou cansada pois precisou correr atrás do ônibus e seu chefe já estava na empresa.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase2_maria/escolha2_maria.html">Fazer o que, precisamos continuar.</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_maria">
            <h1>Você foi de uber, chegou mais cedo, mas ficou sem dinheiro para voltar para casa.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
                </div>
            </div>`)
    }
    return escolha;
}

function voltaInicio (_escolha){
    document.write(`
    <div class="fase_maria">
    <h1>Máximo de tentivas excedidas. Volte ao início.</h1>
        <div class = "seguir">
        <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
        </div>
    </div>`)
}