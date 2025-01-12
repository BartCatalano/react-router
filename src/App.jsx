import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/pages/HomePage"
import RecipePage from "./components/pages/RecipePage"
import FormRecipe from "./components/pages/FormRecipe"
import AdminPage from "./components/pages/AdminPage"
import AdminRecipePage from "./components/pages/AdminRecipePage"


function App() {
return(
<BrowserRouter>
<Routes>
  <Route element={<AppLayout />}>
<Route path="/"element={<HomePage /> } />
<Route path="/Recipe"element={<RecipePage/>} />
<Route path="/NewRecipe"element={<FormRecipe/>} />
<Route path="/admin"element={<AdminPage/>} />
<Route path="/adminrecipe"element={<AdminRecipePage/>} />
  </Route>
</Routes>
</BrowserRouter>

)

}
export default App

