import { useState } from "react";

function Cricket()
{
    const[count,setcount]=useState(0)

    return(
        <>
        <h1>this is cricket scores:{count}</h1>
<button style={{color:'red'}} onClick={()=>setcount(count+1)}>one run</button>
<button style={{color:'blue'}} onClick={()=>setcount(count+2)}>Two runs</button>
<button style={{color:'green'}} onClick={()=>setcount(count+3)}>three runs</button>
<button style={{color:'blue'}} onClick={()=>setcount(count+4)}> FOUR</button>
<button style={{color:'red'}} onClick={()=>setcount(count+6)}> six!!!!!!</button>


        </>
    )
}
export default Cricket;