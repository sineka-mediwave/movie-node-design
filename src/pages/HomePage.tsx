import { useEffect, useState } from "react";
import { IMovie, IShowError } from "../type";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { deleteMovie, getMovies } from "../services/api";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
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
  async function handleDelete(id: number | undefined) {
    toggleModal();
    try {
      setRefresh(true);
      if (id) {
        await deleteMovie(id);
      }
      setShowModalMsg({
        action: "succes",
        msg: "deleted",
      });
    } catch (error) {
      if (error instanceof Error) {
        setShowModalMsg({
          action: "failed",
          msg: error.message,
        });
      } else {
        setShowModalMsg({
          action: "failed",
          msg: "An unknown error occurred.",
        });
      }
    } finally {
      setRefresh(false);
    }
  }

  return (
    <Layout title="home">
      <h1>Movie API</h1>
      <div className="home-bar">
        <Link to="/add" role="button">
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
                <button
                  onClick={() => handleDelete(d.id)}
                  className="refresh-btn"
                >
                  🚮
                </button>
              </div>
              {showModal && (
                <dialog open>
                  <article>
                    <a
                      href="#close"
                      aria-label="Close"
                      className="close"
                      data-target="modal-example"
                      onClick={toggleModal}
                    ></a>
                    <h3>{showModalMsg.action}</h3>
                    <p>{showModalMsg.msg}</p>
                  </article>
                </dialog>
              )}
            </article>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
