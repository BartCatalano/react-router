
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL;



function RecipePage () {
   

 const [lista, setLista] = useState([]);


useEffect(() => {
  getData();
}, [])
// creo la funzione che richiama axios
const getData = () => {
  axios.get(`${apiurl}posts`).then((resp) => {
    setLista(resp.data.data);

  })
}

return (

  // creo la card che si dorvrà visualizzare
  <>
    <div className="container">
      <section>
        <h2 className="m-3">Ricette inserite</h2>
        <div className="row row-cols-2 rowcols-lg-3">
          {lista.length > 0 ? (
            lista.map((curItem, index) => (
              <div className="col" key={index}>
                <div className="card colorcard p-3">
                  <div className="card-body">
                    <h4>{curItem.titolo}</h4>

                    <div className="row row-cols rowcols-lg-3 ">
                      <img className="immagine col" src={`${apiurl}${curItem.immagine}`} alt="" />
                      <span className="mx-2 col">{curItem.contenuto} </span>
                    
                     <Link className="buttonDettagli" to={`/${curItem.id}`}>info</Link>
                     </div>
                  </div>
                </div>
                
              </div>
            ))
          ) : (<p>Nessuna Ricetta presente</p>


          )}
        </div>
      </section>


      
    </div>
  </>
);
}
  


export default RecipePage;