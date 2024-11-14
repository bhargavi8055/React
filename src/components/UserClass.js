import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            "count":0,
            "name":"bhargavi"
        };

        console.log(this.props.name+"constructor called");
    }

    //default constructor without props
    // constructor(){
    //     super();
    // }
    //if we want to use this keyword we have to call super other wise we can write like the below without calling super()
    // constructor(){}
    componentDidMount(){
        console.log(this.props.name+"componentDidMount Called");
    }

    render(){
        console.log(this.props.name+"render called")
        return (
            <div>
                <div>UserClass class component - {this.props.name}</div>
                {/* <button onClick={()=>{
                    this.setState({count:this.state.count+1});

                    sometime we can't calculate the exact value in the case of asynchronous situation then,
                    we can use setstate with the other form using function where function takes previous state as argument/s 
                    this.setState((prevState)=>({"count":prevState.count+1}));
                }}>increment</button>
                
                {this.state.count}
                <button onClick={()=>{
                    this.setState({count:this.state.count-1});
                }}>Decrement</button> */}
                
            </div>
        )
    }

}
export default UserClass;