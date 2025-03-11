function soundButtons(selectorAudio) {

    const element = document.querySelector(selectorAudio);

    if (element != null && element.localName === 'audio') {
            element.play();
        } else {
            console.log('Elemento não encontrado ou seletor inválido.');
        }
    }

const keyList = document.querySelectorAll('.tecla');

for( let count = 0; count < keyList.length; count ++) {

    const key = keyList[count];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    keyList[count].onclick = function(){
        soundButtons(idAudio);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
        key.classList.add('ativa');
        }
    }

    key.onkeyup = function() {
        key.classList.remove('ativa');
    }

}
