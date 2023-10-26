import { useEffect, useState } from "react";
import { IMovie } from "../type";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getMovies } from "../services/api";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesFromAPI();
  }, [refresh]);

  return (
    <Layout title="home">
      <h1>Movie API</h1>
      <div className="home-bar">
        <Link to="/Addmovie" role="button">
          ➕
        </Link>
        <button
          className="refresh-btn"
          disabled={isLoading}
          onClick={() => setRefresh((prev) => !prev)}
        >
          🔃
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="gridBox">
          {movies.map((d, i) => (
            <article className="movie-card" key={i}>
              <h3>{d.title}</h3>
              <h4>{d.year}</h4>
              <div className="action">
                <Link to="/edit" role="button">
                  📝
                </Link>
                <Link to="/EditPage" role="button">
                  🚮
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
