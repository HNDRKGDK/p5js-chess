class Queen extends Piece {

    constructor(img, color) {
        super("queen", color);
        this.image = img;
        for (let i = 0; i <= 7; i++){
            this.moves.push(createVector(i,i));
            this.moves.push(createVector(-i,i));
            this.moves.push(createVector(i,-i));
            this.moves.push(createVector(-i,-i));
            this.moves.push(createVector(i,0));
            this.moves.push(createVector(-i,0));
            this.moves.push(createVector(0,i));
            this.moves.push(createVector(0,-i));
        }
    }
}