import React, { useState,useEffect }  from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../features/pasteSlice";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const Home=()=>{
    const [title,setTitle] = useState('');
    const [value,setValue]=useState('');
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const location = useLocation();
    const paste = location.state?.paste;
    useEffect(() => {
     if (paste) {
       setTitle(paste.title);
       setValue(paste.content);
     }
    }, [paste]);

    
    function createPaste(){
        const dateOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        hour: 'numeric',
          minute: '2-digit',
          hour12: true
        };
        //the function will pass this to slice to perform various operations
        const newPaste={
           title:title,
           content:value,
           _id : paste?._id || uuidv4(), 
           createdAt: paste?.createdAt||new Date().toISOString(),
           
        };
        if(paste){
            //if pasteId already exist then update paste operation is performed
            console.log("dispatching update",newPaste)
            dispatch(updateToPastes(newPaste));
        }else{
            //if id does not exist a new paste is being formed
            dispatch(addToPastes(newPaste));
        }
        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

    return(
    <div>
        <div className="mt-5 pl-5 text-center font-extrabold font-sans text-3xl text-blue-950"><h1>Create Your Paste</h1></div>
        <div className="flex flex-row  mt-2 gap-10 place-content-center-safe pl-3">
          <input  className="p-2 rounded-md mt-2 w-[65%] border-2"
            type="text"
            placeholder="Enter title here.."
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <button onClick={createPaste} className="text-white font-bold pl-5 pr-5 rounded-2xl border-2 bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 hover:text-blue-100">{paste?"Update Paste":"Create My Paste"}</button>
        </div>
       
            
        <div className="mt-2 p-2 flex flex-row place-content-center">
            <textarea className="rounded-md mt-2 p-3 min-w-[1195px] border-2"
               value={value}
               placeholder="Enter content here.. "
               onChange={(e)=>setValue(e.target.value)}
               rows={20}
               
            />
        </div>       
    </div>
       
    )
}
export default  Home