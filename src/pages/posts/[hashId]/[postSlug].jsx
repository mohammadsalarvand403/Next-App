import axios from "axios";

const PostPAge = ({post}) => {
    console.log(post);
    return (
        <div>

        </div>
      );
}
 
export default PostPAge;

export async function getServerSideProps(ctx){
    const {query}=ctx;
    const {data:{data}}=await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`)
    console.log(data);
    console.log(query);
    return{
        props:{
            post:data
        }
    }
}