import { useState } from "react";

function Increment()
{
  const[count,setcount]=useState(0)
  return(
        <>
        <h1>This is increment and decrement:{count}</h1>
<button style={{color:'red'}} onClick={()=>setcount(count+1)}> increment by 1</button>
<button style={{color:'blue'}} onClick={()=>setcount(count-1)}> decrement by 1</button>
</>
  );
}
export default Increment;
