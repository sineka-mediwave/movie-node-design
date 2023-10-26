import "./App.css";
import "@picocss/pico";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
import Loading from "./components/Loading";
const Addmovie = lazy(() => import("./pages/Addmovie"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addmovie" element={<Addmovie />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
