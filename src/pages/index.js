import {ChevronDownIcon,AdjustmentsHorizontalIcon,HeartIcon,BookmarkIcon,ClockIcon,ChatBubbleBottomCenterTextIcon

} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"


export default function Home() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    
      <div dir="rtl" className="bg-gray-50">
    <div className="container mx-auto lg:max-w-screen-lg">
    <div  className="grid gap-8 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
     <div className="hidden md:block md:row-span-2 md:col-span-3">
      <div className="bg-white rounded-3xl overflow-hidden">
    <div className="flex items-center justify-between py-4 px-4 bg-purple-400"
    onClick={()=>setIsOpen(!isOpen)}>
    <span>دسته بندی مقالات</span>
    <ChevronDownIcon className={`w-6 h-6 cursor-pointer bg-purple-400 transition-all duration-200 
    ${isOpen ? "rotate-180":"rotate-0"}`}
    />
    </div>
    <div className={`${isOpen ? "block":"hidden"}`}>
      <Link href={"#"} className="block px-2 hover:bg-purple-100 py-2 mb-1" >
       همه مقالات
      </Link>
      <Link href={"#"}  className="block px-2 hover:bg-purple-100 py-2 mb-1">
       ریکت 
      </Link>
      <Link href={"#"}  className="block px-2 hover:bg-purple-100 py-2 mb-1">
     جاوااسکریپت
      </Link>
        </div>
        </div>
        </div>
        <div className="hidden md:block md:col-span-9 " >
     <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4">
      <AdjustmentsHorizontalIcon className="w-6 h-6 " />
      <span className="text-gray-700">مرتب سازی:</span>
      </div>
      <ul className=" flex items-center gap-x-4">
        <li className="text-gray-700 cursor-pointer py-4">پر بازدید ترین ها</li>
        <li className="text-gray-700 cursor-pointer py-4">محبوب ترین ها</li>
        <li className="text-gray-700 cursor-pointer py-4">جدید ترین ها</li>
      </ul>
     </div>
      </div>  
      <div className=" md:col-span-9  grid grid-cols-6 gap-8" >
        {["Angular.js.jpg","Next.js.png","Node.js.jpg","Nuxt.js.jpg","Vue.js.png","tailwindui.jpg"].map((item,index)=>{
          return(
            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white flex flex-col rounded-3xl p-2 ">
              <div className="spect-w-16 aspect-h-9">
                <img src={`/images/${item}`}  className="rounded-2xl  w-full h-full object-center object-cover"/>
              </div>
              <div className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full justify-between flex-1">
                <h2 className="mb-4 font-bold">بررسی کامل ریکت و ریداکس</h2>
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img src="/images/Next.js.png" className="w-8 h-8 rounded-full ring-2 ring-white ml-2"/>
                <span className="text-sm">محمد سالاروند</span>
                </div>
                <span className="text-xs px-2 rounded-xl bg-blue-100 text-blue-600
                hover:text-blue-100 hover:bg-blue-600 transition-all duration-300
                ">
                  ری اکت
                </span>
                </div>
                <div className="flex items-center justify-between py-1">
               <div className="flex gap-1">
               <div className="flex items-center  bg-slate-200 rounded-md p-1">
               <ChatBubbleBottomCenterTextIcon  className="w-4 h-4 rounded-md  stroke-slate-600"/>
               <span className="text-xs mr-1">10</span>
               </div>
               <div className="flex items-center  bg-red-200 stroke-slate-50 rounded-md p-1 ">
               <HeartIcon className="w-4 h-4 rounded-xl  stroke-red-500"/>
                <span className="text-xs mr-1">5</span>
               </div>
               <div className=" bg-blue-200  rounded-md p-1">
               <BookmarkIcon className="w-4 h-4 rounded-xl stroke-blue-500" />
               </div>
               </div>
               <div className="flex items-center">
               <ClockIcon className="w-4 h-4 rounded-xl stroke-slate-500"/>
               <span className="text-xs text-center">12دقیقه</span>
               </div>
                </div>
              </div>
            </div>
          )
        })}
    </div> 
  </div>
      </div>
      </div>
  )
}
