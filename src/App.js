import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";
import axios from "axios";
import { useState } from "react";

function App() {
  const [showError, setShowError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const getMovie = async (event) => {
    event.preventDefault();
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${form.title}`;
    const res = await axios.get(API);
    if (res.data.Error !== "Movie not found!") {
      const tempMovies = [...movies]; // copy of movies state variable as we can not push into a state as state cannot be mutated.
      tempMovies.unshift(res.data);
      // keep only 3 movies on screen
      if (tempMovies.length > 3) {
        tempMovies.pop();
      }
      setShowError(false);
      setMovies(tempMovies);
    } else {
      //handle error
      setShowError(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <Main movies={movies} handleChange={handleChange} getMovie={getMovie} showError={showError} />
      <Footer />
    </div>
  );
}

export default App;
