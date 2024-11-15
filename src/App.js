import react, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";

// const ele = react.createElement('h1',{id:"heading"},"Hellooo from React Element");

// const ele =  <div><h1>hiii from JSX element</h1></div>;

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout= ()=>{
return(
   <div className="app">
       <Header />
       <Outlet />
   </div>
)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurent/:id",
                element:<RestaurentMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense ><Grocery /></Suspense>
            }
        ],
        errorElement:<Error />,
    }
])

const rootEle=ReactDOM.createRoot(document.getElementById("root"));


rootEle.render(<RouterProvider router={appRouter} />); // for a component


