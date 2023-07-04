class Knight extends Piece {

    constructor(img, color) {
        super("knight", color);
        this.image = img;

        this.moves.push(createVector(2,-1));
        this.moves.push(createVector(1,-2));
        this.moves.push(createVector(-1,-2));
       this.moves.push(createVector(-2,-1));
        this.moves.push(createVector(-2,1));
        this.moves.push(createVector(-1,2));
        this.moves.push(createVector(1,2));
        this.moves.push(createVector(2,1));
    }

}

