import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import FeaturesPage from "./pages/features/FeaturesPage";
// import PageNotFound from "./pages/PageNotFound";

const HomePage = lazy( ()=> import("./pages/home/HomePage"))
const FeaturesPage = lazy( ()=> import("./pages/features/FeaturesPage"))
const PageNotFound = lazy( ()=> import("./pages/PageNotFound"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="*" element={ <PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
