import Layout from "@/container/layout";
import { uesAuth } from "@/context/AuthContext";
import Link from "next/link";

const HomePage = () => {
   const {user}=uesAuth()
    return ( 
        <Layout>
           <div className="container mx-auto lg:max-w-screen-xl">
            <h1 className="text-2xl font-bold">سلام {user?.name}به NEXT_APP خوش آمدید!</h1>
           </div>
        </Layout>
     );
}
 
export default HomePage;