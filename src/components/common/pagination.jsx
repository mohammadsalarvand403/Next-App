import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/router"
import RouterPush from "@/utils/routerPush"

const PaginationComponent = ({page,totalPages}) => {
    const router=useRouter();
  const pageHandler=(e,page)=>{
    router.query.page=page
    RouterPush(router)
  }
    return <div className="flex justify-center col-span-6" dir="ltr">
   {totalPages >1 &&(
     <Pagination 
     count={totalPages} 
     page={page} 
     onChange={pageHandler}
     color="primary"/>
   )}
       </div>
}
 
export default PaginationComponent;