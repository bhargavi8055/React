// const User = (props)=>{
//     return (
//         <div>User functional component - {props.name}</div>
//     )
// }
// export default User;

import React from "react";

import UserClass from "./UserClass";


class User extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.name+"constructor called")
    }

    componentDidMount(){
        console.log(this.props.name+"componentDidMount called")
    }

    render(){
        console.log(this.props.name+"render called")
        return(
            <div>
                {/* <UserClass  name="child2"/> */}
            </div>
        )
    }
}

export default User;