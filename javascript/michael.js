 
 


function faseMichael () {
    alert ('Seja bem-vindo, Michael! O que as pessoas têm postado por aí? Não acredite em tudo que eles falam… É sempre bom ver com seus próprios olhos!')
    var escolhaMichael = prompt('1 - Relíquias no porão. \n2 - Explorar o Quarto Vermelho. ')
    var escolhaAvançar = '1'

    if (escolhaMichael == escolhaAvançar) {
        alert('Bom, se você desceu até aqui, deve saber muito bem o que quer, não é? O que alguém esconderia algo interessante em um porão como esse? É sempre bom ter cuidado com o que você procura…… Mas olhe, uma pilha de documentos atrás daquela ratoeira! Será que está ali o que você quer?')
        faseMichael1 ()
    } else if(escolhaMichael == 2){
        alert('Ao chegar no quarto vermelho uma mulher esquelética vestida de noiva encara Michael. Ele desmaia e é arrastado para debaixo da cama. Será que alguém vai procurar aqui?')

        location.href = './gameover.html'
    }else {
        alert('OPÇÃO INVALIDA')
        return faseMichael()

    }
}

function faseMichael1 () {
        var escolhaMichael1 = prompt('1 - Dar uma volta pelo ambiente.  \n2 - Ver pilha de documentos.')
        var escolhaAvançar1 = '1'

        if (escolhaMichael1 == escolhaAvançar1) {
            alert('Eu adoro um tour! Esse é meu lugar favorito aqui. Sinta todo esse cheiro de… criatividade! Essas máquinas demoraram muito tempo para serem criadas… Tudo em nome da ciência e do progresso. Doutor Charles é muito orgulhoso do seu trabalho!')
            faseMichael2 ()
        } else if (escolhaMichael1 == 2) {
            alert('O que temos aqui? Prontuários médicos, certidões de nascimento, certidões de óbit… Todos assinados pelo Doutor Charles Montgomery. Nossa, esse homem deve trabalhar muito mesmo…')
            alert ('Richard se vira e dá de cara com Charles. Ele veste um jaleco ensanguentado e segura um bisturi. Agarra Richard pelo pescoço e o prende em uma maca de dentista… Um tanto mais macabra, digamos. Vai ser um dia divertido por aqui!')
            location.href = './gameover.html'
            
        }else {
            alert('OPÇÃO INVALIDA')
            return faseMichael1()
        }
}
function faseMichael2 () {
        var escolhaMichael2 = prompt('1 - Quem?  \n2 - Então é verdade? Preciso sair daqui AGORA!')
        var escolhaAvançar2 = '2'

        if(escolhaMichael2 == escolhaAvançar2) {
            alert ('Mas você já vai? E ai? Você vai sair daqui com as mãos abanando? O que você vai postar hoje? Tem certeza que não quer gerar esse conteúdo?')
            faseMichael3 ()
        } else if(escolhaMichael2 == 1) {
            alert('Você nunca ouviu falar do Doutor Charles Montgomery? Em que mundo você vive… Doutor Montgomery foi… Ah, é melhor você conhecê-lo pessoalmente… Olhe, bem atrás de você!')
            alert ('Michael se vira e dá de cara com Charles. Ele veste um jaleco ensanguentado e segura um bisturi. Agarra Michael pelo pescoço e a prende em uma maca de dentista… Um tanto mais macabra, digamos. Vai ser um dia divertido por aqui!')

            location.href = './gameover.html'
        }else {
            alert('OPÇÃO INVALIDA')
            return faseMichael2()
    
        }   
}
function faseMichael3 () {
    var escolhaMichael3 = prompt('1 - Enganar a Dona da casa e fugir \n2 - Sair correndo gritando "SOCORRO, ALGUÉM ME AJUDA!"')
    var escolhaAvançar2 = '1'

    if(escolhaMichael3 == escolhaAvançar2) {
        alert ('Michael consegue enganar a dona da casa, mas não consegue levar nenhuma foto e muito menos souvenirs. Tomara que ele logo poste um comentário e traga mais curiosos para cá!')
        alert ('Michael foge e posta tudo em suas redes trazendo ainda mais curiosos para o Doutor Charles!')
        location.href = './gameover.html'
    } else if(escolhaMichael3 == 2) {
        alert('Você até tentou correr e gritar, mas o Doutor Charles já estava a sua espera com um bisturi na mão, sua última lembrança e de levar uma forte pancada na cabeça!')

        location.href = './gameover.html'
    }else {
        alert('OPÇÃO INVALIDA')
        return faseMichael3()

    }    
}

