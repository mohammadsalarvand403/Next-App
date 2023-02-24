import {HeartIcon,BookmarkIcon,ClockIcon,ChatBubbleBottomCenterTextIcon

} from "@heroicons/react/24/outline"
const PostList = ({blogsData}) => {
  
    return (  
        blogsData.docs.map((blog,index)=>{
          return(
            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white 
            flex flex-col rounded-3xl p-2 ">
              <div className="spect-w-16 aspect-h-9 mb-6">
                {/* {blog/image} */}
                <img src={blog.coverImage} 
                 className="rounded-2xl  w-full h-full object-center object-cover"/>
              </div>
              {/* {blog/content} */}
              <div className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full 
              justify-between flex-1">
                <h2 className="mb-4 font-bold">{blog.title}</h2>
                {/* {blog /data} */}
                <div className="flex items-center justify-between mb-4">
                  {/* {blog/author-category} */}
                <div className="flex items-center">
                <img src="/images/mmd.jpg"
                 className="w-6 h-6 rounded-full ring-2 ring-white ml-2"/>
                <span className="text-sm font-bold text-gray-500">محمد سالاروند</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600
                hover:text-blue-100 hover:bg-blue-600 transition-all duration-300
                ">
                  {blog.category.englishTitle}
                </span>
                </div>
                {/* {blog /interaction} */}
                <div className="flex items-center justify-between">
               <div className="flex items-center gap-x-2">
               <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
               <ChatBubbleBottomCenterTextIcon  className="w-4 h-4 rounded-md  stroke-slate-500"/>
               <span className="text-xs text-gray-500 font-bold leading-3">{blog.commentsCount}</span>
               </button>
               <button className="bg-red-100  p-0.5 rounded flex items-center gap-x-1">
               <HeartIcon className="w-4 h-4 rounded-xl  stroke-red-500"/>
                <span className="text-xs text-gray-500 font-bold leading-3">{blog.likesCount}</span>
               </button>
               <button className="bg-blue-200  p-0.5 rounded flex items-center gap-x-1">
               <BookmarkIcon className="w-4 h-4 rounded-xl stroke-blue-500" />
               </button>
               </div>
               <div className="flex items-center text-[10px] text-gray-400 font-bold">
               <ClockIcon className="w-4 h-4 rounded-xl stroke-gray-400 ml-1"/>
               <span className="ml-1 leading-3">{blog.readingTime}</span>
               <span>دقیقه</span>
               </div>
                </div>
              </div>
            </div>
          )
        })
     );
}
 
export default PostList;  