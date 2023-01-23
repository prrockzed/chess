import Tile from '../Tile/Tile'
import './Chessboard.css';


const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


interface Piece {
  image: string;
  x: number;
  y: number;
}


// Pieces
const pieces: Piece[] = []

// Black pawns
for (let i = 0; i < files.length; i++) {
  pieces.push({ image: 'assets/images/pawn_b.png', x: i, y: 6 })
}

// White Pawns
for (let i = 0; i < files.length; i++) {
  pieces.push({ image: 'assets/images/pawn_w.png', x: i, y: 1 })
}

for (let p = 0; p < 2; p++) {
  const type = (p === 0 ? "b" : "w");
  const y = (p === 0 ? 7 : 0)

  // Rooks
  pieces.push({ image: `assets/images/rook_${type}.png`, x: 0, y })
  pieces.push({ image: `assets/images/rook_${type}.png`, x: 7, y })

  // Knights
  pieces.push({ image: `assets/images/knight_${type}.png`, x: 1, y })
  pieces.push({ image: `assets/images/knight_${type}.png`, x: 6, y })

  // Bishops
  pieces.push({ image: `assets/images/bishop_${type}.png`, x: 2, y })
  pieces.push({ image: `assets/images/bishop_${type}.png`, x: 5, y })

  // Kings and Queens
  pieces.push({ image: `assets/images/queen_${type}.png`, x: 3, y })
  pieces.push({ image: `assets/images/king_${type}.png`, x: 4, y })
}


export default function Chessboard() {

  let board = [];

  for (let j = ranks.length - 1; j >= 0; j--) {
    for (let i = 0; i < files.length; i++) {
      let image = undefined;
      const number = j + i;

      pieces.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      })

      board.push(<Tile image={image} number={number} />)
    }
  }

  return <div id="chessboard">{board}</div>
}