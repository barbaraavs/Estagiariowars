var escolha = prompt ("Escolha o que fazer. \n Digite 1 para testar cardápios sem carne. \n Digite 2 para adicionar mais três tipos de carne.");
var alerta1 = 0;
var alerta2 = 2;

oQueFazerCardapio (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para testar cardápios sem carne. \n Digite 2 para adicionar mais três tipos de carne.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function oQueFazerCardapio (escolha){

    if (escolha == 1){
        document.write(`
            <div class="fase_ana">
            <h1>Você consegue que mais pessoas venham a aderir o consumo dos alimentos do refeitório da empresa e até mesmo quem duvidou que carne de soja era boa, elogiou.</h1>
                <div class = "seguir">
                    <a class = "button_fase" href = "../fase3_ana/escolha3_ana.html">#OsAnimaisAgradecem</a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="fase_ana">
            <h1>As pessoas se animam com a quantidade de carne disponível no almoço, mas acabam esquecendo dos demais alimentos e não seguindo uma dieta tão equilibrada assim.</h1>
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