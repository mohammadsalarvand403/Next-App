import { Fragment } from "react";
import SingelComment from "./SingelComment";

const ReplyComment = ({comments,parentCommentId}) => {
    return comments.map((comment)=>{
        return (
            parentCommentId === comment.responseTo &&(
              <div className="mr-5">
                  <Fragment key={comment._id}>
                     <SingelComment comment={comment}/>
            <ReplyComment comments={comments} parentCommentId={comment._id}/>
                </Fragment>
              </div>
            )
        )
    });
}
 
export default ReplyComment;