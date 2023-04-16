import http from "@/service/httpService";
import routerPush from "@/utils/routerPush";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({postId,responseTo,setOnReply}) => {
    const router=useRouter()
    const [commentValue,setCommentValue]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        const data={
            content:commentValue,
            postId,
            responseTo
        };
        http
        .post("/post-comment/save-comment",data)
        .then((res)=>{
           if(setOnReply) setOnReply(false)
            setCommentValue(""),
            toast.success(res.data.message)
            routerPush(router)
        })
        .catch((err)=>{
            toast.error(err?.response?.data?.message)
        })
    }
    return (  
        <form className="mt-8">
        <span className="font-bold md:text-lg "></span>
        <textarea className="focus:ring-primary p-4 rounded my-4 w-full border-none
        ring-2 ring-slate-300 shadow-sm focus-outline-none focus:ring-2
        dark:focus:within:ring-blue-500"
        value={commentValue}
        onChange={(e)=>setCommentValue(e.target.value)}
        placeholder="نظرت رو برام  بنویس ..."
        >

        </textarea>
        <button 
        className="mt-4 mx-auto py-4 w-full sm:w-56 bg-violet-600
        rounded-xl text-white px-3 md:text-lg"
        onClick={submitHandler}>
            ارسال نظر
        </button>
    </form>
    );
}
 
export default CommentForm;