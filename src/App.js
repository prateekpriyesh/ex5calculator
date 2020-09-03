import React from "react";
import { add, mul, sub, div} from "./Calc";

function App(){
    return(
        <>
        <ul>
            <li> Sum of number  {add(40,4)} </li>
            <li> mul of number  {mul(30,4)} </li>
            <li> Sub of number  {sub(50,4)} </li>
            <li> div of number  {div(100,3)} </li>
        </ul>
        </>
    )
}

export default App;