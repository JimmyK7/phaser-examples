
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.spritesheet('veg', 'assets/sprites/fruitnveg32wh37.png', 32, 32);
    
}

var veg;

function create() {

    //  Create a group
    veg = game.add.group();

    //  Add 5 sprites to it - the 'false' parameter sets them all to dead
    veg.createMultiple(5, 'veg', 0, false);

    //  Set-up a simple repeating timer
    game.time.events.repeat(Phaser.Timer.SECOND, 20, resurrect, this);
    
}

function resurrect() {

    //  Get a dead item - The Group was seeded with 5 'dead' items,
    //  so those will be re-used first and then it will start
    //  creating new ones using the following arguments:

    var x = game.world.randomX;
    var y = game.world.randomY;
    var key = 'veg';
    var frame = game.rnd.between(0, 36);

    veg.getFirstDead(true, x, y, key, frame);

}

function render() {

    game.debug.text('getFirstDead will be called every second', 32, 32);
    game.debug.text('Living: ' + veg.countLiving() + '   Dead: ' + veg.countDead(), 32, 64);
    
}
