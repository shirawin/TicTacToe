import React from 'react';
import Bord from '../Bord/Bord';
import './Game.css'

export default function Game(){
    return(
        <div className="game">
        <div className="game-board">
          <Bord />
        </div>
        <div className="game-info">
          <button>שחק שוב</button>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );

}