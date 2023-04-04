import { toPersianDigits } from "@/utils/toPersianDigits";
import {HeartIcon,BookmarkIcon,ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/outline"
import {HeartIcon as SolideHeartIcon ,BookmarkIcon as SolideBookmarkIcon} from "@heroicons/react/24/solid"

const PostIntraction = ({post,isSmall,className}) => {
    const iconSize=`${isSmall? "h-4 w-4":"h-8 w-8"}`
    return ( 
    <div className={`flex items-center ${isSmall? "gap-x-2":"gap-x-4"} ${className}`}>
               <button className="bg-gray-100-100  p-0.5 rounded flex items-center gap-x-1 text-gray-500
               hover:bg-gray-500 hover:text-gray-100 transition-all">
               <ChatBubbleBottomCenterTextIcon  className={`${iconSize} rounded-md  stroke-current`}/>
               <span className="text-xs text-gray-500 font-bold leading-3">{toPersianDigits(post.commentsCount)}</span>
               </button>
               <button className="bg-red-100  p-0.5 rounded flex items-center gap-x-1 text-red-500
               hover:bg-red-500 hover:text-red-100 transition-all">
              {post.isLiked ?
              <SolideHeartIcon className={`${iconSize}  fill-current`}/>  :
               <HeartIcon className={`${iconSize}  stroke-current-current`}/>}
                <span className="text-xs text-gray-500 font-bold leading-3">{toPersianDigits(post.likesCount)}</span>
               </button>
               <button className="bg-blue-100   text-blue-500 p-0.5 rounded flex items-center gap-x-1
               hover:bg-blue-500 hover:text-white transition-all">
              {post.isBookmarked ?
              <SolideBookmarkIcon className={`${iconSize}  fill-current`}/> 
              : 
              <BookmarkIcon className={`${iconSize}  stroke-current-current`} />}
               </button>
               </div>);
}
 
export default PostIntraction;       