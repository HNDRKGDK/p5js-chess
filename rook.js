class Rook extends Piece {

    constructor(img, color) {
        super("rook", color);
        this.image = img;
        for (let i = 0; i <= 7; i++){
            this.moves.push(createVector(i,0));
            this.moves.push(createVector(-i,0));
            this.moves.push(createVector(0,i));
            this.moves.push(createVector(0,-i));
        }
    }

}