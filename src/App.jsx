import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
  
  const App = () => {
    return (
      <Router>
        <div>
          <nav>
            <NavBar />
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer>
                  <h1 style={{ marginBottom: "40px" }}>
                    Bienvenido a Rk 4x4
                  </h1>
                  <h5>
                    Aqui encontraras el mejor equipamento para tu camioneta
                  </h5>
                </ItemListContainer>
              }
            />
            <Route path="/Detail/:id" element={<ItemDetailcontainer />} />
            <Route path="/Category/:categoryId" element={<ItemListContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default App;


