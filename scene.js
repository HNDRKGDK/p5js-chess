// black pieces
let imgPawn_B;
let imgRook_B;
let imgBishop_B;
let imgKnight_B;
let imgQueen_B;
let imgKing_B;

// white pieces
let imgRook_W;
let imgKnight_W;
let imgBishop_W;
let imgQueen_W;
let imgKing_W;
let imgPawn_W;


const pieceswidth = 8;
let pieces = [];
let selected = null; // piece

/// @brief let gay = false; // piece

let whiteturn = true;
let blackturn = false;

function preload(){

	imgPawn_B = loadImage('assets/b_pawn.png');
	imgRook_B = loadImage('assets/b_rook.png');
	imgKnight_B = loadImage('assets/b_knight.png');
	imgBishop_B = loadImage('assets/b_bishop.png');
	imgKing_B = loadImage('assets/b_king.png');
	imgQueen_B = loadImage('assets/b_queen.png');

	imgRook_W = loadImage("assets/w_rook.png");
	imgKnight_W = loadImage("assets/w_knight.png");
	imgBishop_W = loadImage('assets/w_bishop.png');
	imgQueen_W = loadImage('assets/w_queen.png');
	imgKing_W = loadImage('assets/w_king.png');
	imgPawn_W = loadImage('assets/w_pawn.png');


}


function draw() {

	cursor(CROSS);

	// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

	drawSquares();
	showSelected();
	drawPieces();
}

function setup(){


	// create pieces
	createCanvas(500, 500);

	// console.log("position to index " + coordToIndex(1, 2));
	// console.log("index to position x, y " + indexToCoord(7));

	fillpieces();
	// console.log(pieces);
}


// takes and x,y and translate to a index off a list.
function coordToIndex(x, y) {
	let index;

	index = (pieceswidth * y) + x;

	return index;
}


// takes and index and translate's x, y coords.
function indexToCoord(index) {

	x = Math.floor(index % pieceswidth);
	y = Math.floor(index / pieceswidth);

	let v = createVector(x, y);

	// console.log(v);
	
	return v;
}

function mousePressed()
{
	handleUserInput();
}

function handleUserInput() {
	let click = getClickPosition();
  
	if (selected == null) {
	  // Select a piece on the first click
	  for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].position.x == click.x && pieces[i].position.y == click.y) {
		  if (whiteturn && pieces[i].color == 1) {
			selected = pieces[i];
			break;
		  } else if (blackturn && pieces[i].color == 0) {
			selected = pieces[i];
			break;
		  }
		}
	  }
	} else {

	  // Move the selected piece or capture a piece
	  for (let i = 0; i < selected.moves.length; i++) {
		//Make local variables, easier to read
		let move = selected.moves[i];
		let x = selected.position.x + move.x;
		let y = selected.position.y + move.y;
  
		if (click.x == x && click.y == y) {
		  // Check if there is a piece at the clicked position
		  for (let j = 0; j < pieces.length; j++) {
			if (pieces[j].position.x == click.x && pieces[j].position.y == click.y) {
			  // Capture the piece by removing it from the array
			  pieces.splice(j, 1);
			  break;
			}
		  }
  
		  // Move the selected piece
		  selected.position.x = x;
		  selected.position.y = y;
		  selected = null;
  
		  // Switch turns
		  if (whiteturn) {
			whiteturn = false;
			blackturn = true;
		  } else {
			whiteturn = true;
			blackturn = false;
		  }
  
		  break;
		}
	  }
	}
  }


function keyPressed()
{
	if(keyCode === UP_ARROW) 
	{
		selected = null;
	}
}

function getClickPosition()
{
	let xpos = Math.floor(mouseX / (width / 8));
	let ypos = Math.floor(mouseY / (width / 8));
	
	let v = createVector(xpos, ypos);
	
	return v;
}

function showSelected()
{
	if (selected != null)
	{
		let xpos = Math.floor(selected.position.x * (width / 8));
		let ypos = Math.floor(selected.position.y * (width / 8));
				
		for(i = 0; i < 20; i++){
			// noStroke();
			// colorMode(HSB);
			fill(255, 204,100,4);
			ellipse(xpos+(width/16), ypos+(width/16),i*3);

			// test
			// ellipse(xpos+(width/16), ypos+62+(width/16),i*3);
			// ellipse(xpos+(width/16), ypos+124+(width/16),i*3);
		  }	

		// automatic deselectic if you click on a different peace (Not working yet TODO!) 
		// for (let i = 0; i < pieces.length; i++) {
		// 	if(pieces[i].position.x && pieces[i].position.y == xpos && ypos)
		// 	{
		// 		selected = null;
		// 	}	
		// }
	}
}

function drawSquares()
{  
	// devides the width off the screen and in 8 equal pieces
	let squareSize = width / 8;
	
	// makese rows and colums size off 7
	for(let y = 0; y < height; y += squareSize) {
		for (let x = 0; x < width; x += squareSize) { 

			let row = x / squareSize;
			let col = y / squareSize;
			
			//show square numbers
			text(x, x+30, y+30);
            
			// makes colours the square using module (need to explain)
			if ((row + col)% 2 == 0){
				colorMode(HSB);   
				fill('white');
			}
			else {
				fill(200, 200, 200);
			}

			// creating square
			rect(x, y, squareSize, squareSize);
			// image(imgPawn_B, x, y, squareSize, squareSize);
		}
	}

	// console.log(pieces);
}

function drawPieces()
{
	// todo draw pieces on pieces

	for (let i = 0; i < pieces.length; i++) {
		// indexToCoord(i);
		pieces[i].Draw();
	}
}

function fillpieces()
{
	// todo fill pieces 

	// black pieces
	pieces[0] = new Rook(imgRook_B, 0);
	pieces[0].position = createVector(7,0);
	
	pieces[1] = new Knight(imgKnight_B, 0);
	pieces[1].position = createVector(6,0);

	pieces[2] = new Bishop(imgBishop_B, 0);
	pieces[2].position = createVector(5,0);

	pieces[3] = new King(imgKing_B, 0);
	pieces[3].position = createVector(4,0);

	pieces[4] = new Queen(imgQueen_B, 0);
	pieces[4].position = createVector(3,0);

	pieces[5] = new Bishop(imgBishop_B, 0);
	pieces[5].position = createVector(2,0);

	pieces[6] = new Knight(imgKnight_B, 0);
	pieces[6].position = createVector(1,0);

	pieces[7] = new Rook(imgRook_B, 0);
	pieces[7].position = createVector(0,0);

	pieces[8] = new Pawn(imgPawn_B, 0);
	pieces[8].position = createVector(0,1);

	pieces[9] = new Pawn(imgPawn_B, 0);
	pieces[9].position = createVector(1,1);

	pieces[10] = new Pawn(imgPawn_B, 0);
	pieces[10].position = createVector(2,1);

	pieces[11] = new Pawn(imgPawn_B, 0);
	pieces[11].position = createVector(3,1);

	pieces[12] = new Pawn(imgPawn_B, 0);
	pieces[12].position = createVector(4,1);

	pieces[13] = new Pawn(imgPawn_B, 0);
	pieces[13].position = createVector(5,1);

	pieces[14] = new Pawn(imgPawn_B, 0);
	pieces[14].position = createVector(6,1);

	pieces[15] = new Pawn(imgPawn_B, 0);
	pieces[15].position = createVector(7,1);

	//white pieces
	pieces[16] = new Rook(imgRook_W, 1);
	pieces[16].position = createVector(7,7);

	pieces[17] = new Knight(imgKnight_W, 1);
	pieces[17].position = createVector(6,7);

	pieces[18] = new Bishop(imgBishop_W, 1);
	pieces[18].position = createVector(5,7);

	pieces[19] = new Queen(imgQueen_W, 1);
	pieces[19].position = createVector(4,7);

	pieces[20] = new King(imgKing_W, 1);
	pieces[20].position = createVector(3,7);

	pieces[21] = new Bishop(imgBishop_W, 1);
	pieces[21].position = createVector(2,7);

	pieces[22] = new Knight(imgKnight_W, 1);
	pieces[22].position = createVector(1,7);
	
	pieces[23] = new Rook(imgRook_W, 1);
	pieces[23].position = createVector(0,7);

	pieces[24] = new Pawn(imgPawn_W, 1);
	pieces[24].position = createVector(7,6);

	pieces[25] = new Pawn(imgPawn_W, 1);
	pieces[25].position = createVector(6,6);

	pieces[26] = new Pawn(imgPawn_W, 1);
	pieces[26].position = createVector(5,6);

	pieces[27] = new Pawn(imgPawn_W, 1);
	pieces[27].position = createVector(4,6);

	pieces[28] = new Pawn(imgPawn_W, 1);
	pieces[28].position = createVector(3,6);

	pieces[29] = new Pawn(imgPawn_W, 1);
	pieces[29].position = createVector(2,6);

	pieces[30] = new Pawn(imgPawn_W, 1);
	pieces[30].position = createVector(1,6);

	pieces[31] = new Pawn(imgPawn_W, 1);
	pieces[31].position = createVector(0,6);
}	


