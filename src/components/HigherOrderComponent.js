
export const InputComponent = (props1)=>{
    return(
        <div>Input from the Input Component - {props1.name?props1.name:"nothing passed as a name in props"} </div>
    )
}

const HigherOrderComponent = (InputComponent1)=>{
    return (props)=>{
        return (
            <div><h1> </h1>
            <InputComponent1 {...props} />
            </div>

        )
    }
}
export default HigherOrderComponent;


