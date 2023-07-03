class Piece {

    constructor(n, c) {
        this.name = n;
        this.color = c;
        this.moves = [];
        this.position = createVector(0,0);
        this.image = null;
    }

    Draw()
    {
        let x = this.position.x * width/8 + 6;
        let y = this.position.y * width/8 + 2;
        image(this.image, x, y);
    }

}
