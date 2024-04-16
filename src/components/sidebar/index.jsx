import { NavLink } from "react-router-dom";
import "./style.scss";

const index = () => {
    return (
        <div className="flex flex-col sticky top-0 left-0">
            <NavLink to={"posts"} className=" w-full  py-3 hover:bg-slate-400 cursor-pointer duration-150 text-center font-medium hover:text-white "> POSTS </NavLink>
            <NavLink to={"products"} className=" w-full  py-3 hover:bg-slate-400 cursor-pointer duration-150 text-center font-medium hover:text-white "> PRODACTS </NavLink>
        </div>
    );
};

export default index;