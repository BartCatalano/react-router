import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAlertContext } from "../../contexts/AlertContext";
const apiurl = import.meta.env.VITE_API_URL;

function DettailPages (){
    const [post, setPost] = useState(null);
const {error, setError} = useAlertContext();

    const { id } = useParams();


useEffect(() =>{
    axios.get(`${apiurl}posts/${id}`).then((resp) => {
        console.log(resp);
        
        setPost(resp.data);
      }).catch(()=>{ 
        setError("Post non trovato")
      })
},[id])

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