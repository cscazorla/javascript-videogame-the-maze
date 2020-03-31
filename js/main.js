window.onload = function () {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerWidth / 1.77;
    canvas.style.display= 'block';
    canvas.style.margin = "auto";

    Game.start(canvas);
};

var Game = {
    ctx: null,
    player: null,
    maze: null,

    start: function(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        var columns = 15;
        var column_width = Math.floor(canvas.width / columns);

        this.maze = new maze(columns, column_width);
        this.maze.generate();

        this.canvas.width = this.maze.getTotalWidth();
        this.canvas.height = this.maze.getTotalHeight();
        
        this.player = new player(0,0);

        Input.init();

        window.requestAnimationFrame(Game.update);
    }
}

Game.update = function() {
    window.requestAnimationFrame(Game.update);

    // Player movement
    if( Input.isPressed('up') ) {
        Game.player.move('up');
    }
    if( Input.isPressed('down') ) {
        Game.player.move('down');
    }
    if( Input.isPressed('left') ) {
        Game.player.move('left');
    }
    if( Input.isPressed('right') ) {
        Game.player.move('right');
    }

    Game.render();
};

Game.render = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.maze.render();

    this.player.render();
}