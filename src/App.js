import "./App.css";
import MyNavbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import TVShows from "./components/TVShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <MyNavbar />

          <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<TVShows />} path="/tv-shows" />
            <Route element={<NotFound />} path="*" />
            <Route element={<MovieDetails />} path="/details/:id" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
