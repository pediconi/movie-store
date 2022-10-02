import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Utils } from "./components/Utils";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetails } from "./components/ItemDetails";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/category/:idCategory" element={ <ItemListContainer/> } />
          <Route exact path="/movie/:idMovie" element={<ItemDetails/>}></Route> 
          <Route exact path="/cart" element={<Utils.Description name = "CARGAR CARRITO" /> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
