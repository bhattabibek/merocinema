import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/moviedetail/MovieDetail";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
