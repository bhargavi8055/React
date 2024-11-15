import HigherOrderComponent, { InputComponent } from "./HigherOrderComponent"

const ImplementationHOC = ()=>{
    const ReturnedComponent = HigherOrderComponent(InputComponent);

    return (
        <div>
            <ReturnedComponent name="Bhargavi" />
            <ReturnedComponent />
        </div>
    )
}
export default ImplementationHOC;

// The calling of HigherOrderComponent is in this Component and 
// calling the output of the HigherOrderComponent is also in the this Component 

//calling of this component is in the Body Component with commented