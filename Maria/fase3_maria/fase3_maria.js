var escolha = escolha = prompt ("Escolha o que fazer. \n Digite 1 para almoçar com seus amigos  \n Digite 2 para almoçar mais tarde");
var alerta1 = 0;
var alerta2 = 2;

oQueFazerDoAlmoco (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para almoçar com seus amigos  \n Digite 2 para almoçar mais tarde");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazerDoAlmoco (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_maria">
            <h1>Você almoça com seus amigos e isso torna seu dia mais leve.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html"">Hora de ir para casa.</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_maria">
            <h1>Você recebe uma advertência do RH porque estagiário não deve fazer hora-extra (mesmo em caso de atrasos).</h1>
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