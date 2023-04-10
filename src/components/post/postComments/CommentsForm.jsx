const CommentForm = ({comment,setComment}) => {
    const commentHandler =(e)=>{
        e.defualt
    }
    return (  
        <form className="mt-8">
        <span className="font-bold md:text-lg "></span>
        <textarea className="focus:ring-primary p-4 rounded my-4 w-full border-none
        ring-2 ring-slate-300 shadow-sm focus-outline-none focus:ring-2
        dark:focus:within:ring-blue-500"
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        placeholder="نظرت رو برام  بنویس ..."
        >

        </textarea>
        <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600
        rounded-xl text-white px-3 md:text-lg">
            ارسال نظر
        </button>
    </form>
    );
}
 
export default CommentForm;