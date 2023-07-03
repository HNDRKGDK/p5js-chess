class Rook extends Piece {

    constructor(img, color) {
        super("rook", color);
        this.image = img;
        this.moves.push(createVector(0,1));
        this.moves.push(createVector(1,0));
        this.moves.push(createVector(0,-1));
        this.moves.push(createVector(-1,0));
    }

}

