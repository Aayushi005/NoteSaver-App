import React  from "react";
import { useSelector} from "react-redux";
import {useParams} from "react-router-dom"

const ViewPaste=()=>{
    const {id} = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    const paste = allPastes.filter((p)=> p._id ===id)[0];
    console.log(paste);

    return (
      <div>
        <div className=" mt-10 ml-2 text-4xl font-bold font-sans pl-3.5">
          <h1>All Pastes</h1>
        </div>

        <div className="border-2 mt-5 min-w[500px]">
          <div className="flex flex-row  ml-2 gap-5 rounded-md place-content-between">
            <input
              className=" text-3xl   p-2 pl-3 rounded-2xl mt-2 w-[65%]"
              type="text"
              placeholder="Enter title here.."
              value={paste.title}
              disabled
            />
            {/*<button onClick={createPaste} className=" p-2 rounded-4xl">{paste?"Update Paste":"Create My Paste"}</button>*/}
          </div>

          <div className="  ml-2 rounded-2xl  p-2">
            <textarea
              className="  mt-2 p-2 min-w-[500px]"
              value={paste.content}
              placeholder="Enter content here.. "
              disabled
              rows={20}
            />
          </div>
        </div>
      </div>
    );
}
export default ViewPaste