import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/card/:id" element={<div>card</div>} />
          <Route path="/stats" element={<div>stats</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
