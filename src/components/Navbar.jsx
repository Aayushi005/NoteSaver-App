import React  from "react";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar=()=>{
    return(
        <div className="mt-2 bg-blue-300 min-w-2xl flex flex-row gap-3 place-content-between ">
            <div className="mt-2 bg-blue-300s flex flex-row place-content-start ">
                   <div className="p-2"><i className="fa-solid fa-file-pen text-blue-800 text-xl"></i></div>
                  <div className=" text-blue-800 font-bold text-lg p-1">PasteApp</div>
            </div>
            
            <div className="flex flex-row gap-20 pr-10 pt-3">
                <NavLink to="/" className="text-blue-800 text-lg font-semibold hover:underline">
                  Home
                </NavLink>
                <NavLink to="/pastes" className="text-blue-800 text-lg font-semibold hover:underline">
                   Pastes
                </NavLink>
            </div>
           
           

        </div>
    )
}
export default Navbar