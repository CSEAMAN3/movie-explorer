import "./Main.css";

export default function Main({ getMovie, handleChange, movies, showError }) {
  return (
    <main className="main">
      <div className="main-container">
        <h2 className="hero-heading">Search your favourite movie titles.</h2>
        <h4 className="hero-subheading">Discover the movie poster, cast &#38; plot!</h4>
        <p className="hero-signup-content">Sign up for additional features &#38; unlimited access.</p>
        <form onSubmit={getMovie}>
          <input className="search-input" onChange={handleChange} name="title" placeholder="search movies" type="text" />
          <button className="explore-btn" type="submit">
            Explore!
          </button>
        </form>
        {showError && <p className="error">That is not a valid movie title</p>}
        <div className="prev-movies">
          {movies.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <div className="img-contianer">
                  <img className="movie-img" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-content-container">
                  <h3 className="movie-heading">{movie.Title}</h3>
                  <p className="movie-plot-content">{movie.Plot}</p>
                  <h5 className="cast-heading">Cast</h5>
                  <p className="cast-content">{movie.Actors}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
