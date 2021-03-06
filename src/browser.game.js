let Phaser = window.Phaser;
let browserGame;

function preload() {
    browserGame.load.image('taxiDriver', './img/taxidriver.png');
}

function create() {
    let taxiDriver = browserGame.add.sprite(0, 0, 'taxiDriver');

    browserGame.physics.enable(taxiDriver, Phaser.Physics.ARCADE);
    taxiDriver.body.velocity.x=10;

//    browserGame.stage.backgroundColor = 0xffffff;
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
