
import { signout } from "@/Redux/user/userAction";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const userInfo=useSelector((state)=>state.userSignin)
    const {user,loading}=userInfo
    const dispatch =useDispatch()
    return ( 
    <div className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40 `}>
        <div className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0
        transition-all
        ${loading ? "opacity-0":"opacity-100"}`}>
            <nav className="flex justify-between ">
                <ul className="flex items-center gap-x-5">
                    <li>
                        <Link className="py-2 block" href={"/"} >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link className="py-2 block" href={"/blogs"} >
                        Blogs
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-x-4">
                {user ?(<>
                    <Link className="py-2 " href={"/profile"} >Profile - 
                    <span className="text-sm text-red-400">{user?.name}</span>
                    </Link>
                    <button className="bg-red-600 px-2 py-1 rounded text-white"
                    onClick={()=>dispatch(signout())}
                    >خروج
                    </button>
                </>):(<>
                <Link className="py-2 " href={"/signup"} >
                        ثبت نام 
                </Link>
                <Link className="py-2 " href={"/signin"} >
                        ورود
                </Link>
                </>
                )}
                

                </div>

            </nav>
        </div>
    </div> );
}
 
export default Header;