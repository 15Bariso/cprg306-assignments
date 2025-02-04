'use client';
import {useState} from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    
    
    return(<main>
        <p>{count}</p>
    <button onClick={increment}>increment me</button>
    </main>);
}