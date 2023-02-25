import {ChevronDownIcon} from "@heroicons/react/24/outline"
import Link from "next/link";
import { useState } from "react";
const CategoryDeskTop = ({postCategoris}) => {
    const [isOpen,setIsOpen]=useState(true)
    return ( 
        <div className="bg-white rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between py-4 px-4 bg-purple-400"
        onClick={()=>setIsOpen(!isOpen)}>
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon className={`w-6 h-6 cursor-pointer bg-purple-400 transition-all duration-200 
        ${isOpen ? "rotate-180":"rotate-0"}`}
        />
        </div>
        <div className={`${isOpen ? "block":"hidden"}`}>
          <Link href={"/blogs"} className="block px-2 hover:bg-purple-100 py-2 mb-1" >
           همه مقالات
          </Link>
          {postCategoris.map((category=>{
            return(
              <Link key={category.id} href={`/blogs/${category.englishTitle}`} className="block px-2 hover:bg-purple-100 py-2 mb-1" >
           {category.title}
          </Link>
            )
          }))}
            </div>
            </div>
     );
}
 
export default CategoryDeskTop;