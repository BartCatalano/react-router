import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/HomePage"
import RecipePage from "./components/RecipePage"


function App() {
return(
<BrowserRouter>
<Routes>
  <Route element={<AppLayout />}>
<Route path="/"element={<HomePage /> } />
<Route path="/Recipe"element={<RecipePage/>} />
  </Route>
</Routes>
</BrowserRouter>

)

}
export default App

