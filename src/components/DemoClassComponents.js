import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";


// The order of the lifecycle hooks are different when we are working with the child components 

// =========if the single component is there ========
 
// constructor
// render
// componentDidMount

// after rendering the data then componentDidMount is called


// ==========if there are multiple components inside one another=========
// Eg: Parent 
//       Child 

// Parent Constructor
// parent render 
// child  Constructor
// child render 
// child componentDidMount
// parent componentDidMount


// Eg: Parent 
//        Child1
//        Child2
// Parent Constructor
// Parent render 
// child1 constructor
// child1 render
// child2 constructor
// child2 render 
// child1 componentDidMount
// child2 componentDidMount
// parent componentDidMount



// in the above case usually child1 componentDidMount has to be called but react optimizes and make batch calls 

// there are 2 types of phases 
// 1.render phase 
// 2.commit phase 

// constructor render comes to the render phase 
// componentDidMount comes to the commit phase 

// commit phase takes time because in that phase we will make api calls , user have to wait so 
// react make all render phase operations in one batch and all commit phase operations are in another batch


// Usually for a component there are 3 stages :
// 1.Mounting Stage 
// 2.Update stage 
// 3.unmounting stage 

// in every stage , we will have 2 phases those are render and commit phases


// so first, 

// Mounting phase :
//      Render phase :
//               call the constructor , initializes the local state variable with the dummy data 
//               render called updates the dom with dummy data 
//      commit phase: 
//               componentDidMount called -> in this we will call api and fetch data ->
              
              

// Update Stage:
//     Render phase :
//               setstate called (so component rerenders)
//               updates the dom with api values
//     commit phase:
//               componentDidUpdate Called 

//               from now onwards after every rerendering the component componentDidUpdate will be called 
              
// unmounting phase:just before leaving the component

//     render phase :
//           nothing 
//     commit phase :
//           componentWillUnmount will be called 
//           in this componentWillUnmount , we have to clear our mess like setintervals,setimeout and all other stuff
//           because if we don't clear it will run without stopping even though if we move from our component to other comp





  
class DemoClassComponents extends Component{
    
    constructor(){
        super();
        console.log("Parent class constructor");
        this.state={}
    }

   async componentDidMount(){
//componentDidMount is used to make api calls because our page should n't make the user to wait till the api returns value
//componentDidMount is called only one time then after rerender the page componentDidUpdate will be called.
//we can make componentDidMount as async function
        console.log("Parent componentDidMount called");
        const data = await fetch("https://api.github.com/users/bhargavi8055")
        const json = await data.json();
        console.log(json);
        this.setState(json)

    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called ")
    }
    render(){
        console.log("Parent Render called")
        return (
            <div>
                {/* <User name="child1"/>
                <UserClass  name="child2"/> */}
                <h1>Username:{this.state.login}</h1>
            </div>
        )
    }
}

export default DemoClassComponents;
