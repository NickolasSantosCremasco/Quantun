function alertar() {
    Swal.fire(
        'Opa',
        'Existem referências em algumas figurinhas, clique nelas e descubra hehe 😁',
        'question'
      );
};

let mala = document.getElementById('maleta');
let verIcon = document.getElementById('AvisoIcon');

setTimeout(function() {
  anime({
    targets:maleta,
    translateX:1000,
    rotateZ: 360,
    duration:6000

  });
  
}, 1000);


setInterval(function(){

  anime({
    targets:verIcon,
    translateX:-275,
    duration:3000
  });

},3000);



function foguete() {

  let foguete = document.getElementById('foguete');
  let foguete2 = document.getElementById('foguete2');
  let info = document.getElementById('informacoes');
  let info2 = document.getElementById('aniFog');
  let robo = document.getElementById('robo');
  
  verIcon.style.opacity = '0';
  verIcon.style.transition = 'all .5s';

  anime({
    targets:foguete,
    translateY:-1700,
    duration:15000
  });

  setInterval(function(){

    anime({
      targets:foguete2,
      translateY:-490,
      duration:5000
    });

    robo.style.opacity = '0';

    setInterval(function(){
      anime({
        targets:foguete2,
        scale:1.5,
        rotate:180,
        translateX:50,
        duration:3000
      });

      anime({
        targets:info,
        translateX:-200,
        duration:3000
      });

      info.style.opacity == 0 ;
      info2.style.opacity = '1';
      info2.style.transition = 'opacity 1s';
      
    }, 2000);

  }, 2000);
  
}