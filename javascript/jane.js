


function faseJane() {
    alert('Humn… Eu não estava esperando essa visita… Talvez você encontre alguma coisa por aqui. Mas terá que entrar para procurar. ')
    var escolhaJane = prompt('Escolha uma opção: \n 1 - Entrar na casa e procurar na biblioteca. \n 2 - Ir embora e voltar outro dia')
    var escolhaAvançar = '1'

    if (escolhaJane == escolhaAvançar) {
        alert('Se você veio aqui procurar algum papel velho, aqui tem bastante coisa interessante para você… Talvez você encontre o que precisa e até algo mais. Por onde você quer começar? ')
        faseJane1()
    } else if (escolhaJane == 2) {
        alert('Você decidiu voltar outro dia, essa talvez não tenha sido a melhor escolha.')

        location.href = './gameoverhtml'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseJane()
    }
}

function faseJane1() {

    var escolhaJane1 = prompt(' 1 - Mexer na estante de livros \n 2 - Olhar em cima da mesa')
    var escolhaAvançar1 = '1'

    if (escolhaJane1 == escolhaAvançar1) {
        alert('Você está olhando os livros na estante e dois te chamam a atenção!')
        faseJane2()
    } else if (escolhaJane1 == 2) {
        alert('Na mesa você encontrou uma caixa misteriosa e ao abri-la acabou sendo puxada para dentro da caixa, seria esse seu fim?')

        locationhref = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseJane1()
    }
}

function faseJane2() {
    alert('Temos grandes clássicos aqui! As traças realmente gostam de Edgar Allan Poe("Os Assassinatos na Rua Morgue") e Shirley Jackson(“A Maldição da Casa da Colina”). Digamos que é muito nutritivo... Você quer dar uma folheada?')

    var escolhaJane2 = prompt('1 - Os Assassinatos na Rua Morgue \n 2 - A Maldição da Casa da Colina')
    var escolhaAvançar2 = '2'

    if (escolhaJane2 == escolhaAvançar2) {
        alert('Parece óbvio, não é? Às vezes a resposta está onde a gente realmente espera. Não é sempre, mas acontece. Você está feliz com a sua papelada?')
        faseJane3()
    } else if (escolhaJane2 == 1) {
        alert('Opa, esqueci de avisar que essa não é uma estante qualquer! Você quer dar uma espiadinha nessa sala secreta? Bom, agora você não tem escolha… Jane é empurrada para dentro da Sala Secreta e a entrada se fecha nas suas costas. Está tudo escuro, mas lá no fundo ela consegue ver alguns pontos brilhantes. Os pontos vão se aproximando e ela sente mãos tocarem o seu corpo. Ela poderia gritar agora, mas alguém ouviria')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseJane2()
    }
}

function faseJane3() {
    alert(' No meio do livro, Jane encontra a escritura do imóvel. Esse é um final feliz? Eu não acho que alguém vá se interessar pelo terreno, mas boa sorte! Ela vai precisar.... ')
    alert('Você achou a escritura do imóvel mas viu que na mesa tinha uma caixa com o nome da imobiliária.')
    var escolhaJane3 = prompt('Você decide:\n 1 - Perguntar sobre a caixa para a Dona da casa. \n 2 - Abrir a caixa e ver o que tem ')
    var escolhaAvançar3 = '1'

    if (escolhaJane3 == escolhaAvançar3) {
        alert('A imobiliaria me enviou esta caixa a anos mas nunca abri para ver o que tinha dentro')
        faseJane4()
    } else if (escolhaJane3 == 2) {
        alert('Você abre a caixa e deixa a dona da Casa furiosa a última coisa que você escuta é um grito dizendo \n "NÃO, DE NOVO NÃO!"')
        alert('a Dona da casa foi possuída pelo espirito que vive na residência. Sua alma foi retirada de seu corpo!')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseJane3()
    }
}

// última fase (CRIAR UMA IMAGEM DE FIM DE JOGO 'VITÓRIA')
function faseJane4() {
    alert('Que tal abrirmos a caixa juntas?')
    var escolhaJane4 = prompt('Escolha uma ação:\n 1 - Deve ser os antigos brindes de fim de ano, depois a senhora abre. Estou com pressa e preciso ir. \n 2 - Claro! Fiquei curiosa e queria dar uma olhada!')
    var escolhaAvançar4 = '1'

    if (escolhaJane4 == escolhaAvançar4) {
        alert('Você conseguiu pegar oque precisava e salvou seu emprego na imobiliária. Após alguns vacilos você fez um serviço que ninguém na imobiliaria queria e ganhou pontos com sua chefe!')
        location.href = './index3.html'
        //faseJane  ()
    } else if (escolhaJane4 == 2) {
        alert('Dentro da caixa existia um espirito do mal que possuiria quem abrisse a caixa, ao abrir a Dona da casa foi possuida por esse espirito e acabou matando Jane.')

        location.href = './gameover.html'
    } else {
        alert('OPÇÃO INVALIDA')
        return faseJane4()
    }
}


