const PostComments = ({post}) => {
    return ( 
    <div>
        <h2>نظرات</h2>
        {post.comments.map((comment,index)=>{
            return !comment.responseTo && comment.status ===2 &&<div></div>;
        })}
        <form>
            <h3>ارسال نظرجدید</h3>
            <textarea name="" id="" ></textarea>
        </form>
    </div> 
    );
}
 
export default PostComments;