class Pawn extends Piece {

    constructor(img, color) {
        super("pawn", color);
        this.image = img;
        if (this.color == 1){
            this.moves.push(createVector(0,-1));
            this.moves.push(createVector(0,-2));
            return;
        }
        this.moves.push(createVector(0,1));
        this.moves.push(createVector(0,2));
    }
    

}