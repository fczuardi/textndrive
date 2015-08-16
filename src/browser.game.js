let Phaser = window.Phaser;
let browserGame;

function preload() {
}

function create() {
}

function update() {
}

function start(elementId) {
    let element = document.getElementById(elementId);
    console.log(element.offsetWidth);
    browserGame = new Phaser.Game(
        element.offsetWidth,
        600,
        Phaser.AUTO,
        elementId,
        {
            preload,
            create,
            update
        }
    );
}

export default {
    start
};
