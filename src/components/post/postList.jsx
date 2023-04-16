import {HeartIcon,BookmarkIcon,ClockIcon,ChatBubbleBottomCenterTextIcon

} from "@heroicons/react/24/outline"
import Link from "next/link";
import PostIntraction from "./postIntration";
const PostList = ({blogsData}) => {
  
  
    return (  
        blogsData.map((blog,index)=>{
          return(
            <div key={blog.id} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white 
            flex flex-col rounded-3xl p-2 max-h-[350px]">
              <div className="spect-w-16 aspect-h-9 mb-6">
                {/* {blog/image} */}
                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <img src={blog.coverImage} 
                 className="rounded-2xl  w-full h-full object-center object-cover"/>
                </Link>
              </div>
              {/* {blog/content} */}
              <div className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full 
              justify-between flex-1">
                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <h2 className="mb-4 font-bold">{blog.title}</h2>
                </Link>
                </div>
                {/* {blog /data} */}
                <div className="flex items-center justify-between mb-4">
                  {/* {blog/author-category} */}
                <div className="flex items-center">
                <img src="/images/mmd.jpg"
                 className="w-6 h-6 rounded-full ring-2 ring-white ml-2"/>
                <span className="text-sm font-bold text-gray-500">{blog.author.name}</span>
                </div>
                <Link href={`/blogs/${blog.category.englishTitle}`}>
                <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600
                hover:text-blue-100 hover:bg-blue-600 transition-all duration-300
                ">
                  {blog.category.title}
                </span>
                </Link>
                </div>
                {/* {blog /interaction} */}
                <div className="flex items-center justify-between">
                  <PostIntraction post={blog} isSmall/>
               <div className="flex items-center text-[10px] text-gray-400 font-bold">
               <ClockIcon className="w-4 h-4 rounded-xl stroke-gray-400 ml-1"/>
               <span className="ml-1">زمان مطالعه:</span>
               <span className="ml-1 leading-3">{blog.readingTime}</span>
               <span>دقیقه</span>
               </div>
                </div>
            </div>
          )
        })
     );
}
 
export default PostList;  