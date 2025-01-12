import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/pages/HomePage"
import RecipePage from "./components/pages/RecipePage"
import FormRecipe from "./components/pages/FormRecipe"


function App() {
return(
<BrowserRouter>
<Routes>
  <Route element={<AppLayout />}>
<Route path="/"element={<HomePage /> } />
<Route path="/Recipe"element={<RecipePage/>} />
<Route path="/NewRecipe"element={<FormRecipe/>} />
  </Route>
</Routes>
</BrowserRouter>

)

}
export default App

