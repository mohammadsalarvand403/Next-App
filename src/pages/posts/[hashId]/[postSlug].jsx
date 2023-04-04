import PostIntraction from "@/components/postIntration";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { BookmarkIcon, LinkIcon,SolideBookmarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoLogoLinkedin,IoLogoTwitter} from 'react-icons/io';
import { FaTelegram} from 'react-icons/fa';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import {MdContentCopy} from 'react-icons/md';

const PostPAge = ({post}) => {
    const [copeid,setCopeid]=useState(false)
    const copideHandler =()=>{
        setCopeid(true)
        toast.success("کپی شد");
        setTimeout(()=>{
          setCopeid(false)  
        },3000)
    }
    return (
        <div dir="rtl" className="bg-gray-50 h-screen p-2">
            <div className="md:max-w-screen-md  container mx-auto">
            <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start
            mb-12  mx-auto">
                {/* {author data} */}
                <div className="flex items-stretch">
                    <img className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
                    alt={post.author.name}
                    src="/images/mmd.jpg" />
                    <div className="flex flex-col mr-4 justify-between">
                    <div className="flex justify-between"> 
                    <h2 className="font-bold ">{post.author.name}</h2>
                    <Link href={`/blogs/${post.category.englishTitle}`}>
                <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600
                hover:text-blue-100 hover:bg-blue-600 transition-all duration-300
                ">
                  {post.category.title}
                </span>
                </Link>
                    </div>
                    <span className=" font-bold text-xs hidden md:block">{post.author.biography}</span>
                    <div className="font-bold text-gray-700 text-xs">
                        <span>{new Date(post.createdAt).toLocaleString("fa-IR")}</span>
                        <span className="mx-1">&bull;</span>
                        <span>
                            <span>خواندن</span>
                            <span>{toPersianDigits(post.readingTime)}</span>
                            <span>دقیقه</span>
                        </span>
                    </div>                
                </div>
                </div>
                <div className="flex ">
                    <button>
                        <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer"/>
                    </button>
                    <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600
                    rounded-full px-3 py-1 flex items-center"> 
                    <span className="ml-1 text-xs">{post.isBookmarked ? "ذخیره":"ذخیره نشد"}</span>
                    {post.isBookmarked ?(
                        <BookmarkIcon className= "h-6 w-6 fill-current"/>
                    ) : (
                        <BookmarkIcon className="h-6 w-6 stroke-current"/>
                    )}
                    </button>
                </div>
            </header>
            <main className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl
            prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
            prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 
            prose-img:rounded-xl prose-a:text-blue-600">
                <h1>{post.title}</h1>
                <h2>عنوان تستی اول</h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                 و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                 کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان 
                رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                 و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                 حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                 اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <img src={post.coverImage}/>
                <h2>عنوان تستی دوم</h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                 و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                 کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان 
                رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                 و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                 حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                 اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
               <h2>نحوه کانفیگ تیلویند</h2>
               <p>
                بدونه استفاده از کدها<a href="https://highlightjs.org">highlight.js</a>میتوان به سادگی
               را داخل محتوای بلاگ ها قرار داد!
               </p>
            <p>
                به عنوان مثال برای کانفیگ تلویند از فایل استفاده کرد:<code>tailwind.config.js</code>
            </p>
            <pre dir="ltr">
 {`module.exports ={
 purge:[],
 theme:{
 extend:{},
 }
 variants:{},
 plugins:[]
 }`
 }
             </pre>
            
            </main>
            <section className="py-4">
                <ul className="flex it flex-wrap gap-x-4 mb-6">
                    {["فرانت اند","جاوااسکریپت","ریکت","next.js"].map((tag,index)=>{
                        return(
                            <li key={index} className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100
                            transition-all cursor-pointer text-gray-600 text-xs mb-3 block">
                                {tag}

                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between ">
                    <PostIntraction post={post} className="justify-evenly w-full md:w-auto" />
                    <div className="flex gap-x-6 items-center justify-between w-full md:w-auto">
                    <div className="flex items-center md:gap-x-4 gap-x-6 w-full md:w-auto
                    ">
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/
                        posts/${post.hashId}/${post.slug}`}
                        target="_blank"
                        className="block"
                        rel="noreferrer"
                        >  
                        <IoLogoLinkedin size={30}
                        className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                        />
                        </a>
                        <a href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/
                       posts/${post.hashId}/${post.slug}`}
                        target="_blank"
                        className="block"
                        rel="noreferrer"
                        >  
                        <IoLogoTwitter size={30}
                        className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                        />
                        </a>
                        <a href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}
                        posts/${post.hashId}/${post.slug}&text=${post.title}`}
                        target="_blank"
                        className="block"
                        rel="noreferrer"
                        >  
                        <FaTelegram size={30}
                        className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                        />
                        </a>
                    </div>
                    <div>
                <CopyToClipboard text={`${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/
                       posts/${post.hashId}/${post.slug}`}
                        onCopy={copideHandler}>
                        <div className="bg-gray-100 border cursor-pointer px-3 py-1 rounded-2xl text-gray-600 flex
                        items-center gap-x-2">
                        <span>کپی&nbsp;لینک</span> 
                        <MdContentCopy size={22}/>
                        </div>
                </CopyToClipboard>
                {copeid && 
                       <ToastContainer/>
                }
                        </div>
                    </div>
                </div>
             </section>
            </div>
        </div>
      );
}
 
export default PostPAge;

export async function getServerSideProps(ctx){
    const {query}=ctx;
    const {data:{data}}=await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`)
    return{
        props:{
            post:data
        }
    }
}