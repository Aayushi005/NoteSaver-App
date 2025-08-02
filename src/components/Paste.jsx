import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../features/pasteSlice";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Paste=()=>{
    const pastes= useSelector((state)=> state.paste.pastes);
    const [searchTerm,setSearchTerm] =useState('');
    const dispatch = useDispatch();
    const filtered_data = pastes.filter((paste)=> 
        paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId));
    }
    const navigate = useNavigate();
    function handleEdit(paste){
        navigate("/",{state:{paste}});

    }
    return(
        <div className="flex flex-col items-center">
           <input className=" p-2 rounded-md mt-5 w-[50%] border-2"
            type="search"
            placeholder="seach paste.."
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
           />
           <div className="flex flex-col gap-10 mt-5 w-[75%] ">
             {
                filtered_data.length>0 && 
                filtered_data.map(
                    (paste,index)=>{
                       return (
                        <div key={`${paste?._id}-${index}`} className="border-2 rounded-md">
                            <div className=" min-h-[120px] flex flex-row place-content-between mt-2 rounded-md">
                                <div className=" w-[75%]  p-1">
                                    <div className="text-2xl font-medium ">{paste.title}</div>
                                    <div>{paste.content}</div>
                                </div>

                                <div className=" gap-3 flex flex-col place-content-start">
                                   <div className="flex flex-row place-content-end gap-1 pr-2 text-gray-700 text-lg ">
                                      <button onClick={()=>handleEdit(paste)}><i className="fa-solid fa-pen-to-square cursor-pointer" title="Edit"></i></button>
                                      <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
                                        toast.success("Copied successfully")
                                      }}><i className="fa-solid fa-copy cursor-pointer" title="Copy"></i></button>
                                      <button>
                                        <Link to={`/pastes/${paste._id}`}><i className="fa-solid fa-eye cursor-pointer" title="View"></i></Link>
                                      </button>
                                      <button onClick={()=>handleDelete(paste?._id)}><i className="fa-solid fa-trash cursor-pointer" title="Delete"></i></button>
                                      <button><i className="fa-solid fa-share-from-square cursor-pointer" title="Share"></i></button>

                                    </div>
                                   <div className="pl-5 pr-2 flex flex-col  flex-wrap place-content-end  text-gray-700 text-[12px] ">Date: {new Date(paste.createdAt).toLocaleString('en-US',{
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                     minute: '2-digit',
                                    hour12: true})}
                                   </div>

                                </div>
                                
                                

                            </div>
                            

                        </div>

                            
                        )
                    }
                        
                )
             }

           </div>
        </div>
    )
}
export default Paste