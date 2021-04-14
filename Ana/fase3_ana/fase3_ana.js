var escolha = escolha = prompt ("Escolha o que fazer. \n Digite 1 para iniciar um programa de reciclagem \n Digite 2 para ignorar o lixo");
var alerta1 = 0;
var alerta2 = 2;

oQueFazerDoLixo (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para iniciar um programa de reciclagem \n Digite 2 para ignorar o lixo");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazerDoLixo (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_ana">
            <h1>O programa se torna um sucesso, e os funcionários começam a ter hábitos de alimentação mais saudáveis e a cuidar mais do descarte do lixo.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../../index.html"">Programa implementado com sucesso</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_ana">
            <h1>O cardápio atual é mantido, não atendendo um público maior.</h1>
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