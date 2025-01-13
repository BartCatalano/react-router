import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/pages/HomePage"
import RecipePage from "./components/pages/RecipePage"
import FormRecipe from "./components/pages/FormRecipe"
import AdminPage from "./components/pages/AdminPage"
import AdminRecipePage from "./components/pages/AdminRecipePage"
import DettailPages from "./components/pages/DettailPages"
import { AlertProvider } from "./contexts/AlertContext"


function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Recipe" element={<RecipePage />} />
            <Route path="/NewRecipe" element={<FormRecipe />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/adminrecipe" element={<AdminRecipePage />} />
            <Route path=":id" element={<DettailPages />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  )

}
export default App

