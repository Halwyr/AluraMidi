function soundButtons(idElementSound) {

    document.querySelector(idElementSound).play();
}

const keyList = document.querySelectorAll('.tecla');

for( let count = 0; count < keyList.length; count ++) {

    const key = keyList[count];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    keyList[count].onclick = function(){
        soundButtons(idAudio);
    };

    key.onkeydown = function (event) {
        if (event.code === 'Espace' || event.code === 'Enter') {
        key.classList.add('ativa');
        }
    };

    key.onkeyup = function() {
        key.classList.remove('ativa');
    };

};
