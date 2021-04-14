var escolha = escolha = prompt ("Escolha o que fazer. \n Digite 1 para aceitar o emprego \n Digite 2 para recusar o emprego");
var alerta1 = 0;
var alerta2 = 2;

oQueFazerDoEmprego (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para aceitar o emprego \n Digite 2 para recusar o emprego");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazerDoEmprego (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_joao">
            <h1>Você aceita o desafio, mesmo sabendo que vai precisar dormir no ônibus na volta pra casa.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html"">Pelo menos agora tem VR!</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_joao">
            <h1>Você encerra seu período como estagiário e aguarda novas oportunidades.</h1>
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