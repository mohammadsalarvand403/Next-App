import Layout from "@/container/layout";
import { useSelector } from "react-redux";

const HomePage = () => {
   const userInfo=useSelector((state)=>state.userSignin)
   const { user } =userInfo;
    return ( 
        <Layout>
           <div className="container mx-auto lg:max-w-screen-xl">
            <h1 className="text-2xl font-bold">سلام {user?.name}به NEXT_APP خوش آمدید!</h1>
           </div>
        </Layout>
     );
}
 
export default HomePage;