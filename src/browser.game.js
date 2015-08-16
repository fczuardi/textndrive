let Phaser = window.Phaser;
let browserGame;

function preload() {
    browserGame.load.image('taxiDriver', './img/taxidriver.png');
}

function create() {
    let taxiDriver = browserGame.add.sprite(0, 0, 'taxiDriver');
    var style = { font: "65px Roboto", fill: "#FFFF00", align: "center" };

    browserGame.physics.enable(taxiDriver, Phaser.Physics.ARCADE);
    taxiDriver.body.velocity.x=150;
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
