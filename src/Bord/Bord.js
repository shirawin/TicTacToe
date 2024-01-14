import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';
import './Bord.css';

export default function Bord(){

    const [XIsNext,setXIsNext]=useState(true);
    const [array, setArray] = useState(Array(9).fill(''));
    const [status,setStatus] = useState('השחקן הבא: ');
    const [winner ,setWinner]= useState(false);

    // useEffect=()=>{
    //     debugger;
    //     const winner = calculateWinner(array);
    //     if(winner)
    //     {
    //         setStatus('The winner is:')
    //     }
    // }
    const renderSquare =(i)=>{
        
        return <Square value={array[i]} onClick={() => handleChange(i)} />;
    }

    const handleChange = (i) => { 
        
        const newArray = [...array];
        newArray[i] = XIsNext ? 'X' : 'O';
        if (calculateWinner(newArray)&&!winner) {
            setStatus('המנצח הוא: ')
            setArray(newArray);
            setWinner(true)
            return
        }
        if(calculateWinner(newArray)){
            return
        }
        setArray(newArray);
        setXIsNext(!XIsNext);
    };

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

    return ( 
        <div className="container">
        <div className="status">{status}{XIsNext ? 'X' : 'O'}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );

}