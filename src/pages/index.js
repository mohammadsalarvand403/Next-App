import Link from "next/link";

const HomePage = () => {
    return ( 
        <div>
            <Link href={"/bloges"}>
                <p className="flex justify-center items-center font-bold">
                go to blogs page
                </p>
            </Link>
        </div>
     );
}
 
export default HomePage;