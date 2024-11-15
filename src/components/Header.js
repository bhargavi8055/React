import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact] = useState("Login")

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200 ">
            <div className="">
                <img className="w-[100px]"
                 src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex m-2 p-2">
                    <li className="m-2 p-2">onlineStatus {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li className="m-2 p-2 hover:bg-gray-500 hover:text-white hover:rounded-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 p-2 hover:bg-gray-500 hover:text-white hover:rounded-lg">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="m-2 p-2 hover:bg-gray-500 hover:text-white hover:rounded-lg">
                        <Link to="/contact">Contact Us</Link>

                    </li>
                    <li className="m-2 p-2 hover:bg-gray-500 hover:text-white hover:rounded-lg">
                        <Link to="/grocery">Grocery</Link>

                    </li>
                    <li className="m-2 p-2 hover:bg-gray-500 hover:text-white hover:rounded-lg">Cart</li>
                    <button className="hover:bg-gray-500 hover:text-white hover:rounded-lg m-2 p-2" onClick={()=>{
                        btnNameReact === "Login"?
                        setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    );
};
export default Header;