import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetails } from "./components/ItemDetails";
import { CartContextProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/movie/:idMovie"
              element={<ItemDetails />}
            ></Route>
            <Route
              exact
              path="/cart"
              element={<CartContainer/>}
            />
          </Routes>
        </main>
      </Router>
    </CartContextProvider>
  );
}

export default App;
