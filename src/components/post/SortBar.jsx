import RouterPush from "@/utils/routerPush";
import {AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline"
import { useRouter } from "next/router";
import { useState } from "react";


const sortOpstions =[
  {lable:"پربازدید ترین",id:"most"},
  {lable:"محبوب ترین",id:"popular"},
  {lable:"جدید ترین",id:"newest"}
]
    



const SortBar = () => {
  const router=useRouter();
  const [sort , setSort]=useState(router.query.sort ||"newest");

  const sortHandler=(id)=>{
    setSort(id);
    router.query.sort=id
    RouterPush(router)
  }
    return ( 
        <div className="bg-white rounded-3xl px-4 flex items-center">
        <div className="flex gap-x-2 items-center ml-4">
        <AdjustmentsHorizontalIcon className="w-6 h-6 " />
        <span className="text-gray-700">مرتب سازی:</span>
        </div>
        <ul className="flex items-center gap-x-4 ">
          {sortOpstions.map(({id ,lable})=>{
          return(
            <li key={id} 
            onClick={()=>sortHandler(id)}
            className={`text-gray-700 cursor-pointer py-4 relative  ${id ===sort ? "text-purple-700 font-bold":""}`}>
              {lable}
              {id === sort &&(<span 
            className="h-[3px] bg-purple-700 w-8 rounded absolute right-0 bottom-0">
            </span>
            )}
            </li>
          )
          })}
        </ul>
       </div>
     );
}
 
export default SortBar;