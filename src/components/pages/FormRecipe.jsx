import { useEffect, useState } from "react";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;
// creo l'object iniziale cone le chiavi vuote
const initialFormData = {
  titolo: "",
  immagine: "",
  contenuto: "",
}

function FormRecipe () {
  
 

  const [formData, setFormData] = useState(initialFormData);
  

// creo la funzione per i campi compilativi quando si clicca il submit
const handArticleForm = (event) => {
  // creo il prevent default
  event.preventDefault();

  // faccio la chiamata axios per post che inserisce la ricetta del form nell object in back
  axios.post(`${apiurl}posts`, formData).then((resp) => {

    // creo oggetto del nuovo articolo,
    const newArticle = {
      ...formData,
      id: Date.now(),

    }


    // creo copia dell'array con ila nuovo articolo 
    const newArray = [...lista, newArticle];


    // aggiorno lo stato della lista
    setLista(newArray);

    // ripulisco i campi del form
    setFormData(initialFormData);

  })

};

// creo la funzione generica per gli input
const handleInputChange = (event) => {
  const { name, value } = event.target;
  const newData = {
    ...formData,
    [name]: value,

  };

  setFormData(newData);

}
return (

<section className="homeLayout">
<h3>Aggiungi Ricetta</h3>
<h6>Compila i campi per inserire una nuova ricetta</h6>
<form onSubmit={handArticleForm} >
  <div className="mb-3">
    <label htmlFor="articoloName">Nome ricetta</label>
    <input type="text"
      className="form-control"
      name="titolo"
      id="articoloName"
      value={formData.titolo}
      onChange={handleInputChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="immagineInsert">Immagine</label>
    <input type="text"
      className="form-control"
      name="immagine"
      id="immagineInsert"
      value={formData.immagine}
      onChange={handleInputChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="contenutoInsert">Descrizione Ricetta</label>
    <input type="text"
      className="form-control"
      name="contenuto"
      id="contenutoneInsert"
      value={formData.contenuto}
      onChange={handleInputChange} />
  </div>
  <button type="submit" className="btn btn-primary">salva</button>
</form>
</section>

)
// fine funzione 
}

export default FormRecipe;