import Layout from "@/container/layout";
import Link from "next/link";

const HomePage = () => {
    return ( 
        <Layout>
           <div className="container mx-auto lg:max-w-screen-xl">
            <h1 className="text-2xl font-bold">Thes is Home Page</h1>
           </div>
        </Layout>
     );
}
 
export default HomePage;