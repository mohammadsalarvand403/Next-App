import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CommentForm from "./CommentsForm";

const SingelComment = ({comment,postId}) => {
    const [onReply , setOnReply] = useState(false)
    return <div className="border  border-gray-300 rounded-xl p-4 mb-8 md:p-4">
        <div className="flex items-center justify-start ">
            <UserIcon  className="h-12 w-12 stroke-gray-600 "strokeWidth={1}/>
            <div className="flex flex-col justify-between mr-4">
                <span className="block text-sm text-gray-600 ">{comment.writer?.name}</span>
                <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{toLocalDate(comment.createdAt)}</span>
            </div>
           
        </div>
        <div className="mt-4 leading-10">
                {comment.content}
            </div>
            <button className="mt-4  text-blue-500 px-3 " onClick={()=>setOnReply(!onReply)}>{!onReply ? "پاسخ به ":"بیخیال"}</button>
            {onReply &&  <div className="mt-8">
            <span className="font-bold md:text-lg ">درحال پاسخ به {comment.writer.name}</span>
           <CommentForm postId={postId} responseTo={comment._id} setOnReply={setOnReply}/>
        </div>}
    </div> 
}
 
export default SingelComment;