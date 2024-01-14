import React, { useEffect, useState } from 'react';
import './Square.css'

export default function Square(props) {
    
    const [value,setValue]=useState();
    
    const handleClick=()=>{
        
    }
    return (
     <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );

}
