import Link from "next/link";
import { useRouter } from "next/router";

const CategoryMobile = ({postCategoris}) => {
  const {query}=useRouter()
    return ( 
    <div className=" flex md:hidden gap-x-4 overflow-auto pt-5 pb-5">
        <Link href={"/blogs"} className={`block text-sm whitespace-nowrap px-3 py-1 border border-gray-500 text-center  bg-white rounded-3xl text-gray-500 whitespace-nowrap text-sm
          ${!query.categorySlug ?
            "border-purple-700 bg-purple-700  text-white hover:bg-purple-500 border-2":""}`} >
           همه مقالات
          </Link>
      {postCategoris.map((category=>{
        return(
          <Link key={category.id} href={`/blogs/${category.englishTitle}`}>
      <p className={`block text-sm whitespace-nowrap px-3 py-1 border border-gray-500 text-center  bg-white rounded-3xl text-gray-500 whitespace-nowrap text-sm" ${query.categorySlug ===category.englishTitle ?
      "border-purple-700 bg-purple-700 border-2 text-white hover:bg-purple-500":""} `}> {category.title}</p>
      </Link>
        )
      }))}
    </div>
    );
}
 
export default CategoryMobile;