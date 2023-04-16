import PaginationComponent from "@/components/common/pagination"
import CategoryDeskTop from "@/components/post/CaregoryDesktop"
import CategoryMobile from "@/components/post/CategoryMobile"
import PostList from "@/components/post/postList"
import SortBar from "@/components/post/SortBar"
import Layout from "@/container/layout"
import axios from "axios"
import queryString from "query-string"


export default function CategoryPage({blogsData,postCategoris}) {
  return (
    
<Layout>
<div  className="bg-gray-50">
    <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
    <CategoryMobile postCategoris={postCategoris}/>
    <div  className="grid gap-8 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
        {/* {Category /Desktop} */}
     <div className="hidden md:block md:row-span-2 md:col-span-3">
      <CategoryDeskTop postCategoris={postCategoris} />
        </div>
         {/* {sortbar/Desktop}  */}
        <div className="hidden md:block md:col-span-9 " >
          <SortBar/>
      </div> 
     {/* {blogs/section} */}
      <div className=" md:col-span-9  grid grid-cols-6 gap-8" >
    <PostList blogsData={blogsData.docs}/>
    <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages}/>
    </div>
  </div>
      </div>
      </div>
</Layout>
  )
}

export async function getServerSideProps(context) {
  const {query,req} =context;
 const {data:result}= await axios
 .get(`http://localhost:5000/api/posts?${queryString.stringify(query)}`
 ,{
  withCredentials:true,
  headers:{
    cookie:req.headers.cookie ||""
  }
});
 const {data:postCategorisResult}=await axios.get("http://localhost:5000/api/post-category")
 const {data}=result;
 const {data:postCategoris}=postCategorisResult
  return{
    props:{
    blogsData:data,
    postCategoris
    }
  }
}