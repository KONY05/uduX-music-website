import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FeaturesPage from "./pages/features/FeaturesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
