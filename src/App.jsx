import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import CreateGallery from "./components/CreateGallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShow from "./components/TV Show";
import MovieDetails from "./components/MovieDatails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <CreateGallery
              film={[
                "Harry Potter",
                "Thor",
                "Western",
                "Horror",
                "Indiana Jones",
                "Star Wars",
                "Saw",
              ]}
            />
          }
        ></Route>
        <Route path="/tvshows" element={<TVShow />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
