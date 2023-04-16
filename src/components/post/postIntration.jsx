import http from "@/service/httpService";
import RouterPush from "@/utils/routerPush";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {HeartIcon,BookmarkIcon,ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/outline"
import {HeartIcon as SolideHeartIcon ,BookmarkIcon as SolideBookmarkIcon} from "@heroicons/react/24/solid"
import { useRouter } from "next/router";
import toast from 'react-hot-toast';

const PostIntraction = ({post,isSmall,className}) => {
    const router=useRouter()
    const iconSize=`${isSmall? "h-4 w-4":"h-8 w-8"}`
    const likeHandler=(postId)=>{
        http.put(`/posts/like/${postId}`)
        .then(({data})=>{
            RouterPush(router)
            toast.success(`${data.message}`)
        })
        .catch((err)=>{
            err?.response?.data?.message
            toast.error(err?.response?.data?.message)
        })
    };
    const bookmarkHandler=(postId)=>{
        http.put(`/posts/bookmark/${postId}`)
        .then(({data})=>{
          RouterPush(router)
            toast.success(`${data.message}`)
        })
        .catch((err)=>{
            err?.response?.data?.message
            toast.error(err?.response?.data?.message)
        })
    }
    return ( 
    <div className={`flex items-center ${isSmall? "gap-x-2":"gap-x-4"} ${className}`}>
               <button className="bg-gray-100-100  p-0.5 rounded flex items-center gap-x-1 text-gray-500
               hover:bg-gray-500 hover:text-gray-100 transition-all">
               <ChatBubbleBottomCenterTextIcon  className={`${iconSize} rounded-md  stroke-current`}/>
               <span className="text-xs text-gray-500 font-bold leading-3">{toPersianDigits(post.commentsCount)}</span>
               </button>
               <button 
               onClick={()=>likeHandler(post._id)}
               className="bg-red-100  p-0.5 rounded flex items-center gap-x-1 text-red-500
               hover:bg-red-500 hover:text-red-100 transition-all">
              {post.isLiked ?
              <SolideHeartIcon className={`${iconSize}  fill-current`}/>  :
               <HeartIcon className={`${iconSize}  stroke-current-current`}/>}
                <span className="text-xs text-gray-500 font-bold leading-3">{toPersianDigits(post.likesCount)}</span>
               </button>
               <button 
                onClick={()=>bookmarkHandler(post._id)}
               className="bg-blue-100   text-blue-500 p-0.5 rounded flex items-center gap-x-1
               hover:bg-blue-500 hover:text-white transition-all">
              {post.isBookmarked ?
              <SolideBookmarkIcon className={`${iconSize}  fill-current`}/> 
              : 
              <BookmarkIcon className={`${iconSize}  stroke-current-current`} />}
               </button>
               </div>);
}
 
export default PostIntraction;       