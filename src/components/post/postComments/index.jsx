import React from "@heroicons/react";
import { Fragment, useState } from "react";
import CommentForm from "./CommentsForm";
import ReplyComment from "./ReplyComment";
import Reply from "./ReplyComment";
import SingelComment from "./SingelComment";

const PostComments = ({post}) => {
    const [commentValue, setCommentsValue] = useState("")
    return ( 
    <div>
        {post.comments.map((comment,index)=>{
            return !comment.responseTo && comment.status ===2 &&
           <Fragment key={comment._id}>
            <SingelComment comment={comment} postId={post._id}/>
            <ReplyComment postId={post._id} comments={post.comments} parentCommentId={comment._id}/>
           </Fragment>
        })}
        <div className="mt-8">
            <span className="font-bold md:text-lg ">ارسال نظرات</span>
            <CommentForm  postId={post._id} responseTo={null}/>
        </div>
    </div> 
    );
}
 
export default PostComments;