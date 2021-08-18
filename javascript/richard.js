





function faseRichard() {

    alert('Olá, Richard! Estava esperando isso há muito tempo. Você pode deixar aqui no tapete, mas… Olhe, a porta está aberta! Você não quer entrar?')

    var escolhaAvançar = '2'
    var escolhaRichard = prompt(' 1 - Deixar a encomenda na porta \n 2 - Deixar a encomenda na biblioteca ')



    if (escolhaRichard == escolhaAvançar) {

        alert('Parece que faz muito tempo que ninguém lê um livro por aqui, não é? Não tem uma superfície sem poeira para que você possa deixar esse pacote. Talvez ali na mesa, junto com as outras caixas?')

        faseRichard1()
    } else if (escolhaRichard == 1) {

        alert('Muito obrigada, Richard! Bom trabalho. Da próxima vez, você poderia entrar pra tomar um café, que tal?')

        location.href = './gameover.html' // --~> GAMEOVER

    } else {
        alert('OPÇÃO INVALIDA')
        return faseRichard()
    }
}



function faseRichard1() {
    alert('É impressão minha ou essa encomenda se mexeu? ')

    var escolhaRichard1 = prompt(' 1 - Abrir o pacote  \n 2 - Deixar a encomenda na mesa e ir embora ')
    var escolhaAvançar1 = '2'

    if (escolhaRichard1 == escolhaAvançar1) {
        alert('Mas já? Tem certeza que não quer dar uma volta antes de seguir com o seu trabalho?')
        faseRichard2()
    } else if (escolhaRichard1 == 1) {
        alert('Toc! Toc! Você pode achar que é só uma mão decepada se mexendo, mas esse é o Larry. Eu estava esperando ele há muito tempo. Parece que ele gostou de você…\n\n Larry agarra a mão de Richard e o puxa para dentro do pacote, que se lacra imediatamente. Será que ele vai sentir falta da luz do sol? ')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseRichard1()
    }
}


//FASE 3
function faseRichard2() {
    alert('De repente a voz que estava conversando com você desaparece deixando apenas um último aviso."Ouça seus instintos e conseguirá escapar da minha armadilha"')

    var escolhaAvançar2 = '1'
    var escolhaRichard2 = prompt('Você tem duas opções uma salva sua vida a outra te mata. E precisa escolher uma delas agora!\n 1 - Procurar por respostas na casa. \n 2 - Sair correndo.')


    if (escolhaRichard2 == escolhaAvançar2) {
        alert('Você observa todos os cômodos e dois te chamam muita atenção!')
        faseRichard3()
    } else if (escolhaRichard2 == 2) {
        alert('Você entrou em desespero, se jogou pela janela e conseguiu sair da casa....Mas calma, você esqueceu que estava no segundo anda!')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseRichard2()
    }
}




function faseRichard3() {
    alert('Você encontrou a sala das Estatuas e o quarto vermelho. Ao observar as Estatuas percebe que 1 delas está desalinhada. Já o segundo cômodo te leva para o porão.')

    var escolhaAvançar3 = '1'
    var escolhaRichard3 = prompt('Escolha sua próxima ação: \n 1 - Descobrir porque uma Estatua está desalinhada. \n 2 - Ir até o porão. ')


    if (escolhaRichard3 == escolhaAvançar3) {
        alert('Você achou uma caixa e uma porta atrás da Estatua, mas você percebe que algo está vindo atrás de você.')
        faseRichard4()
    } else if (escolhaRichard3 == 2) {
        alert('morreu')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseRichard3()
    }
}


//ULTIMA FASE
function faseRichard4() {
    alert('Rápido escolha uma das chaves e abra a porta!')
    alert('Você terá duas chances. Escolha uma chave:\n 1 - Chave com chaveiro de uma caveira \n 2 - Chave com chaveiro da LDU \n 3 - Chave com escudo do Fluminense')

    var escolhaCertaRichard4 = 3
    var tentativa = 0;
    while (tentativa < 3) {
        var escolhaFaseRichard4 = prompt("Qual chave você escolhe?")
        if (escolhaCertaRichard4 == escolhaFaseRichard4) {
            alert("Você acertou a chave e conseguiu escapar!") 
            alert ('FIM!')                       
            
            break;
        }
        else {
            alert("TENTE NOVAMENTE!")

        }
    }
}


