import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/pages/HomePage"
import RecipePage from "./components/pages/RecipePage"
import FormRecipe from "./components/pages/FormRecipe"
import AdminPage from "./components/pages/AdminPage"
import AdminRecipePage from "./components/pages/AdminRecipePage"
import DettailPages from "./components/pages/DettailPages"
import { AlertProvider } from "./contexts/AlertContext"
import { createContext, useContext, useEffect, useState } from "react"
import GlobalContext from "./contexts/GlobalContext"
import axios from "axios"
const apiurl = import.meta.env.VITE_API_URL;


function App() {

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
  const { global } = createContext(GlobalContext);
  const globalContextData = { lista };


  return (
    <GlobalContext.Provider value={globalContextData}>
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
    </GlobalContext.Provider>
  )

}
export default App

