import { useSelector } from "react-redux";


const Profail = () => {
    const userInfo=useSelector((state)=>state.userSignin)
    const {user}=userInfo
    return ( <div>
<h1>{user?.name}</h1>
    </div> );
}
 
export default Profail;<div>
</div>