import react from "react";
import  ReactDOM  from "react-dom/client";

// const ele = react.createElement('h1',{id:"heading"},"Hellooo from React Element");

// const ele =  <div><h1>hiii from JSX element</h1></div>;


const ComponentA = ()=> <h1>Hii from Component A</h1>;


const ComponentB = ()=>(
    <h1>Hii from Component B</h1>
);
const ComponentC = ()=>{
    return <h1>Component C</h1>
};

const ele = <h1>from JSX Element</h1>

const ComponentD = function (){
    return (
        <div>
            <ComponentA ></ComponentA>
            <ComponentB />
            {ComponentC()}
            {ele}
            <h1>from Component D</h1>
        </div>
    )
}
const rootEle=ReactDOM.createRoot(document.getElementById("root"));

// rootEle.render(ele); ///for an react element or jsx element

rootEle.render(<ComponentD />); // for a component


