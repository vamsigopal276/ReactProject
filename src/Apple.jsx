import { useState } from "react";

function Apple()
{
    const [apples,setApples] =useState(0);
    return(
        <>
        <h1>This is apple store:{apples}</h1>
           { apples === 0 ?(
                <p>No apples left</p>):(
                    <p>Great you have some apples</p>
                )}
                <button onClick={()=> setApples(apples+1)}>Add Apples....</button>
                <button onClick={()=>apples>0&&setApples(apples-1)}>Remove Apples...</button>
                <button onClick={()=>setApples(0)}>Reset Apples</button>

        </>
    )
}
export default Apple;