import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import AddPaper from "./pages/AddPaper";
import Analytics from "./pages/Analytics";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/add" element={<AddPaper />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
