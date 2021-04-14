var escolha = prompt ("Escolha o que fazer. \n Digite 1 para falar com o chefe  \n Digite 2 para ignorar a situação.");
var alerta1 = 0;
var alerta2 = 2;

oQueFazer (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para falar com o chefe  \n Digite 2 para ignorar a situação.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazer (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_maria">
            <h1>Você explica para o chefe que acabou a bateria do celular, e mesmo achando que levaria bronca, descobre que está tudo bem!</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase3_maria/escolha3_maria.html">Hora de acalmar o coração.</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_maria">
            <h1>Você ignora a situação e não percebe que estavam esperando que você fala-se algo sobre.</h1>
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