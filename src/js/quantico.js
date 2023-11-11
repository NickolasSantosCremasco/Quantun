

function aparecer() {
    let txt = window.document.getElementById('txt')
    if (txt.style.opacity == 0){
    txt.style.opacity = '1'
    txt.style.transition = 'opacity .5s'
    
}else {
    Swal.fire(
        'Bom Trabalho!',
        'Clique em outras figurinhas para ter mais informações!',
        'success'
      )
}
    
}


const elemento = document.getElementById('leibniz')
const elemento2 = document.querySelector('.info')

function criadorDoBit() {

    let computador = document.getElementById('computador')

    computador.style.opacity = '0'
    computador.style.transition = 'all .9s'

    setTimeout(function(){
        anime({
            targets: elemento,
            translateY: 380,scale:1.7,
            translateX:110,
            rotateZ: 360,
            duration: 4000,
            borderRadius: ['0%', '20%'],
            loop: false
            })
    
            anime({
                targets:elemento2,
                translateX:-1450,
                translateY:10,
                duration: 4000
            })
    
            
    
            let cartao_logico = document.getElementById('cartao-logico')
            setInterval(function() {
                anime({
                    targets:cartao_logico,
                    translateX:650,
                    duration:4000
                })
             }, 3000);
        
    }, 1000);
       
    }

    
    






    

