import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL;

function DettailPages (){
    const [post, setPost] = useState(null);


    const {id} = useParams();


useEffect(() =>{
    axios.get(`${apiurl}posts/${id}`).then((resp) => {
        setPost(resp.data);
        console.log(resp);
        
      })
},[])

return (
<>
{post && <div> 
    <h1>{post.titolo}</h1>
    <p>{post.contenuto}</p>
    <p>{post.id}</p>
    <img src={`${apiurl}${post.immagine}`} alt="" />
    
 </div> }
    
    
    </>
)

}

export default DettailPages;