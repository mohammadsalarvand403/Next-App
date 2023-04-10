import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CommentForm from "./CommentsForm";

const SingelComment = ({comment}) => {
    const [onReply , setOnReply] = useState(false)
    const [commentValue, setCommentsValue]= useState("")
    return <div className="border  border-gray-500 rounded-lg p-2 md:p-4">
        <div className="flex  gap-x-4">
            <UserIcon  className="h-10 w-10 rounded-2xl"/>
            <div className="flex flex-col justify-between">
                <span>{comment.writer?.name}</span>
                <span>{toLocalDate(comment.createdAt)}</span>
            </div>
           
        </div>
        <div className="">
                {comment.content}
            </div>
            <button className="mt-4  text-blue-500 px-3 " onClick={()=>setOnReply(!onReply)}>{!onReply ? "پاسخ به ":"بیخیال"}</button>
            {onReply &&  <div className="mt-8">
            <span className="font-bold md:text-lg ">درحال پاسخ به {comment.writer.name}</span>
           <CommentForm comment={commentValue} setComment={setCommentsValue}/>
        </div>}
    </div> 
}
 
export default SingelComment;