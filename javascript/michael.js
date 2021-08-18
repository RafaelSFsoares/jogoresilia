 
 


function faseMichael () {
    alert ('Seja bem-vindo, Michael! O que as pessoas têm postado por aí? Não acredite em tudo que eles falam… É sempre bom ver com seus próprios olhos!')
    var escolhaMichael = prompt('1 - Explorar a Sala das Estátuas 2 - Explorar o Porão    3 -  Explorar Quarto Vermelho ')
    var escolhaAvançar = '1'

    if (escolhaMichael == escolhaAvançar) {
        alert('Passou')
        faseMichael1 ()
    } else {
        alert('morreu')

        location.href = '../gameover.html'
    }
}

function faseMichael1 () {
        var escolhaMichael1 = prompt('')
        var escolhaAvançar1 = ''

        if (escolhaMichael1 == escolhaAvançar1) {
            alert('')
            faseMichael2 ()
        } else {
            alert('')
            location.href = '../gameover.html'
            
        }
}
function faseMichael2 () {
        var escolhaMichael2 = prompt('')
        var escolhaAvançar2 = ''

        if(escolhaMichael2 == escolhaAvançar2) {
            alert ('')
            faseMichael3 ()
        } else {
            alert('')

            location.href = '../gameover.html'
        }    
}
function faseMichael3 () {
    var escolhaMichael3 = prompt('')
    var escolhaAvançar2 = ''

    if(escolhaMichael3 == escolhaAvançar2) {
        alert ('')
        faseMichael4 ()
    } else {
        alert('')

        location.href = '../gameover.html'
    }    
}
function faseMichael4 () {
    var escolhaMichael2 = prompt('')
    var escolhaAvançar2 = ''

    if(escolhaMichael2 == escolhaAvançar2) {
        alert ('')
        //faseMichael ()
    } else {
        alert('')

        location.href = '../gameover.html'
    }    
}
