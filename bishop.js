class Bishop extends Piece {

    constructor(img, color) {
        super("bishop", color);
        this.image = img;
        for (let i = 0; i <= 7; i++){
            this.moves.push(createVector(i,i));
            this.moves.push(createVector(-i,i));
            this.moves.push(createVector(i,-i));
            this.moves.push(createVector(-i,-i));
        }


    }
}