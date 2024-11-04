import { useState } from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Greeting from "./Greeting";
import Cricket from "./Cricket";
import Apple from "./Apple";
import Increment from "./Increment";
import Discount from "./Discount";
import Greet from "./Greet";
import Employee from "./Employee";
import Cource from "./Cource";

function App()
{
  // const EmployeeData={id:101,name:'vamsi',salary:10000.45}
  return(
      <>
      <h1> This is App.jsx file...</h1>
      {/* <AboutUs/>
      
      <ContactUs></ContactUs>
      <Greeting/>
      <Increment/>
      <Cricket/>
      <Apple/>
      <Discount/> */}
 
{/* <Greet name="ravi"/>
<Greet name="raju"/>  */}
{/* <Greet/> */}
{/* <Employee employeeobj ={EmployeeData}/> */}
<Cource title={"react"}description={"in-depth"}/>
<Cource title={"About Ratan sir"}description={"Ratan sir is very nice...."}/>

      </>
    
  )
}
export default App;