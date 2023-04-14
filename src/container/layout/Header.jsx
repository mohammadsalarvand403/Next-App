import Link from "next/link";

const Header = () => {
    return ( 
    <div className="bg-white shadow-md py-2 mb-8">
        <div className="container mx-auto xl:max-w-screen-xl px-4 md:px-0">
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
                <Link className="py-2 " href={"/profaile"} >
                        Profaile
                </Link>
                <Link className="py-2 " href={"/signup"} >
                        ثبت نام 
                </Link>
                <Link className="py-2 " href={"/signin"} >
                        ورود
                </Link>

                </div>

            </nav>
        </div>
    </div> );
}
 
export default Header;