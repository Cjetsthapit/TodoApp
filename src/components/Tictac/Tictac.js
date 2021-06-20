import React,{useState} from 'react';
import Square from './Square/Square';
import styles from './Tictac.module.css';
import {Container, Button} from 'react-bootstrap';
const Tictac = (props) => {
    const [squares,setSquares]= useState(Array(9).fill(null));
    //if true x turn else o turn
    const [turn,setTurn]=useState(true);
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const renderSquare=(i)=>{
        return(
            <Square value={squares[i]} clicked={()=>{handleClick(i)}}/>
        )
    };
    const handleClick=(i)=>{
        const square=squares.slice();
        if (calculateWinner(square) || squares[i]){
            return;
        }
        square[i]=turn? "X" : "O";
        setTurn(!turn);
        setSquares(square);
    }
    const newGame=()=>{
        setSquares(Array(9).fill(null));
        setTurn(true);
    }
    const winner = calculateWinner(squares);
    let player;
    if (winner) {
      player = 'Winner: ' + winner;
    } else {
      player = 'Next player: ' + (turn ? 'X' : 'O');
    }
    return(
        <Container className={styles.tictac}>
            <div className={styles.player}>{player}</div>
            <div className={styles.boardRow}>
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className={styles.boardRow}>
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className={styles.boardRow}>
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <Button size="lg" onClick={newGame} className="mt-4 mx-auto px-5 py-3" style={{backgroundColor:'rgb(52,58,64)',display:'flex',justifyContent:'center'}}>New Game</Button>
        </Container> 
    )
    
}
export default Tictac;