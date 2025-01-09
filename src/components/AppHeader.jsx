
import { NavLink } from "react-router-dom";
function AppHeader () {

    const listRoutes = [{
        path:"/",
        title: "Home"

    },
    {
        path:"/Recipe",
        title:"RecipePage"
    }
]

    return(
<header>
    <ul>
        {listRoutes.map((page)=>{
            return(
                <li key={page.title}> <NavLink to={page.path}>{page.title}</NavLink> </li>
            )
        })}
    </ul>
</header>


    )
}

export default AppHeader;