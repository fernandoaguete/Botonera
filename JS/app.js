"use strict"
window.onclick = () => {
    const startButton = document.getElementById('initial-button');
    const effects = [];

    startButton.addEventListener('click', async function(){
        const effectsDirectory = await window.showDirectoryPicker();
        for await (const [key, value] of effectsDirectory.entries()) {
            effects.push(value.name);
        }
        generateButtons();
    });

    const controlPanel = document.getElementById('control-panel');

    function generateButtons() {
        controlPanel.innerHTML = '';
        effects.forEach(effects => {
            controlPanel.innerHTML = controlPanel.innerHTML + newButton(effect);
        });
        addOnClickListeners();
    }

    function newButton(effect) {
        return '<div class="control-panel-button flex"><p class="control-panel-button-text">${effect}</p></div>';
    }

    function addOnClickListeners(){
        const buttons = document.querySelectorAll('.control-panel-button');
        const buttonsArray = Array.from(buttons);
        buttonsArray.forEach((button, index) => {
            button.onclick = () => {
                play(effects[index]);
            }
        });
    }

    function play(effect) {
        let audio = new Audio('effects/'+effect);
        audio.play();
    }

}
