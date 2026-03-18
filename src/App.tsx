import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/card/:id" element={<div>card</div>} />
          <Route path="/stats" element={<div>stats</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
