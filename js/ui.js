var UI = function() {
    var Button = function(value, x, y, w, h, context) {
        // create shadow box
        context.fillStyle = 'rgba(0, 0, 0, .15)'
        context.fillRect(x + 2, y + 2, w + 2, h + 2)

        context.fillStyle = '#333'
        context.fillRect(x, y, w, h)

        context.fillStyle = 'white'
        context.font = '20px Georgia'
        context.fillText(value, x + w / 2, y + h / 2 + 5)

        this.click = function(posx, posy) {
            if (posx >= x && posx <= x + w && posy >= y && posy <= y + h)
                return true
            return false
        }
    }

    this.showWelcomeScreen = function() {
        this.createWindow(
            '#eeeeee',
            '#000',
            Game.canvas.width / 4,
            Game.canvas.height / 5
        )

        Game.ctx.font = 'bold 40px Georgia'
        Game.ctx.fillStyle = '#000'
        Game.ctx.textAlign = 'center'
        Game.ctx.fillText(
            'The Maze',
            Game.canvas.width / 2,
            Game.canvas.height / 3
        )

        var btn1 = new Button(
            'Beginner',
            Game.canvas.width / 2 - 80,
            Game.canvas.height / 2.25 - 40,
            160,
            40,
            Game.ctx
        )
        var btn2 = new Button(
            'Intermediate',
            Game.canvas.width / 2 - 80,
            Game.canvas.height / 2.25 + 20,
            160,
            40,
            Game.ctx
        )
        var btn3 = new Button(
            'Expert',
            Game.canvas.width / 2 - 80,
            Game.canvas.height / 2.25 + 80,
            160,
            40,
            Game.ctx
        )
        var btn4 = new Button(
            'Master',
            Game.canvas.width / 2 - 80,
            Game.canvas.height / 2.25 + 140,
            160,
            40,
            Game.ctx
        )

        Game.canvas.addEventListener('click', function(e) {
            var mouseX, mouseY
            if (e.offsetX) {
                mouseX = e.offsetX
                mouseY = e.offsetY
            } else if (e.layerX) {
                mouseX = e.layerX
                mouseY = e.layerY
            } else {
                return
            }

            if (btn1.click(mouseX, mouseY)) {
                Game.start(8)
            } else if (btn2.click(mouseX, mouseY)) {
                Game.start(15)
            } else if (btn3.click(mouseX, mouseY)) {
                Game.start(30)
            } else if (btn4.click(mouseX, mouseY)) {
                Game.start(60)
            }
        })
    }

    this.showGameOverScreen = function() {
        this.createWindow(
            '#1c6a9e',
            '#fff',
            Game.canvas.width / 4,
            Game.canvas.height / 4
        )

        Game.ctx.font = 'bold 40px Georgia'
        Game.ctx.fillStyle = '#FFF'
        Game.ctx.textAlign = 'center'
        Game.ctx.fillText(
            'You escaped!',
            Game.canvas.width / 2,
            Game.canvas.height / 2
        )

        Game.ctx.font = 'bold 20px Georgia'
        Game.ctx.fillText(
            'Reload the page to play again',
            Game.canvas.width / 2,
            Game.canvas.height / 1.5
        )
    }

    this.createWindow = function(
        background_color,
        border_color,
        width,
        height
    ) {
        this.showMouse()

        Game.ctx.fillStyle = background_color
        Game.ctx.strokeStyle = border_color
        Game.ctx.lineWidth = 10

        Game.ctx.rect(
            width,
            height,
            Game.canvas.width / 2,
            Game.canvas.height / 2
        )
        Game.ctx.fill()
        Game.ctx.stroke()
    }

    this.showMouse = function() {
        canvas.style.cursor = 'pointer'
    }
}
