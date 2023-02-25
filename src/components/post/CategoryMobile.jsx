import Link from "next/link";

const CategoryMobile = ({postCategoris}) => {
    return ( 
    <div className=" flex md:hidden gap-x-4 overflow-auto pt-5 pb-5">
      {postCategoris.map((category=>{
        return(
          <Link key={category.id} href={`/blogs/${category.englishTitle}`}>
      <p className="block text-sm whitespace-nowrap px-3 py-1 border border-gray-500 text-center bg-white rounded-3xl text-gray-500" > {category.title}</p>
      </Link>
        )
      }))}
    </div>
    );
}
 
export default CategoryMobile;