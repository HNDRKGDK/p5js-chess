class King extends Piece {

    constructor(img, color) {
        super("king", color);
        this.image = img;
        this.moves.push(createVector(0,1));
        this.moves.push(createVector(1,0));
        this.moves.push(createVector(0,-1));
        this.moves.push(createVector(-1,0));
        this.moves.push(createVector(1,1));
        this.moves.push(createVector(-1,1));
        this.moves.push(createVector(1,-1));
        this.moves.push(createVector(-1,-1));  
    }

}