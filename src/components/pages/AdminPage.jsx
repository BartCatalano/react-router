import { NavLink } from "react-router-dom";

const apiurl = import.meta.env.VITE_API_URL;


function AdminPage () {

    
    return(
<div>

    <div className="containerAdmin">
        <h2>Benvenuto nella pagina di gestione</h2>
        <h5>Da qui potrai gestire tutte le tue ricette</h5>
        <h6>Aggiungine di nuove usando il bottone qui sotto!</h6>
<ul className="adminList">
    <li className="listAdmin"> <NavLink to="/NewRecipe">"Crea Ricetta"</NavLink> </li>
</ul>
<div className="adminList_2">
<h6> cancella quelle che non ti servono più usando la gestione lista con il bottone qui sotto </h6>
<ul className="adminList">
<li className="listAdmin"> <NavLink to="/adminrecipe">"Lista Ricette Esistenti"</NavLink> </li>
</ul>
</div>
</div>
 </div>
)
}

export default AdminPage;