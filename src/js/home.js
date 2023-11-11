let iconeAmigavel = document.getElementById('pessoaAmigavel')
let dialogo = document.getElementById('dialogo')
let caixaDialog = document.getElementById('caixaDialog')
let contador = 0

setInterval(function() {
    anime({
        targets:iconeAmigavel,
        translateX:-1475,
        rotateZ:-360,
        durantion:100
    })

    setInterval(function(){
        dialogo.style.opacity = '1'
        dialogo.style.transition = 'all .5s'
        
    }, 2500);
    
    function coisa() {
        caixaDialog.style.opacity = '0'
        
    }
}, 1000);