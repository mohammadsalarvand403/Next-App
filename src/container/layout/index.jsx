import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return ( 
       <div dir="rtl" className="bg-gray-50 min-h-screen">
         <Header/>
        {children}
        <Footer/>
       </div>
     );
}
 
export default Layout;