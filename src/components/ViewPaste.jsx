import React  from "react";
import { useSelector} from "react-redux";
import {useParams} from "react-router-dom"

const ViewPaste=()=>{
    const {id} = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    const paste = allPastes.filter((p)=> p._id ===id)[0];
    console.log(paste);

    return(
        <div>
        <div className="flex flex-row  mt-2 gap-5 place-content-between">
          <input  className="p-2 pl-3 rounded-2xl mt-2 w-[65%]"
            type="text"
            placeholder="Enter title here.."
            value={paste.title}
            disabled
            
          />
          {/*<button onClick={createPaste} className=" p-2 rounded-4xl">{paste?"Update Paste":"Create My Paste"}</button>*/}
        </div>
       
            
        <div className="mt-2 p-2">
            <textarea className="rounded-2xl mt-2 p-2 min-w-[500px]"
               value={paste.content}
               placeholder="Enter content here.. "
               disabled
               
               rows={20}
               
            />
        </div>       
    </div>
    )
}
export default ViewPaste