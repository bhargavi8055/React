import react from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const ele = react.createElement('h1',{id:"heading"},"Hellooo from React Element");

// const ele =  <div><h1>hiii from JSX element</h1></div>;

//Components structure
//Header
//--Logo
//--Menu(Nav Items)

//Body
//--Search
//--RestaurentContainer
//------RestaurentCard
//---------

//Footer
//--Copyright
//--Links
//--Address
//--Contact
// https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill





const AppLayout= ()=>{
return(
   <div className="app">
       <Header />
       <Body />
   </div>
)
}


const rootEle=ReactDOM.createRoot(document.getElementById("root"));


rootEle.render(<AppLayout />); // for a component


