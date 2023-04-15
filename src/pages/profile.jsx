import { uesAuth } from "@/context/AuthContext";

const Profail = () => {
    const {user}=uesAuth()
    return ( <div>
<h1>{user?.name}</h1>
    </div> );
}
 
export default Profail;<div>
</div>