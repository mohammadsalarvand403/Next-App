import {AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline"
const SortBar = () => {
    return ( 
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
     );
}
 
export default SortBar;