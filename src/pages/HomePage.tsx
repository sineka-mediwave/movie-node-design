import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../type";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const HomePage = () => {
  const [data, setData] = useState<IMovie[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5476/movies")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout title="home">
      <h1>Movie API</h1>
      <div className="gridBox">
        <article className="movie-card">
          <h3>Title: Avenger Endgame</h3>
          <h4>Year: 2020</h4>
          <button>✏️</button>
          <button>❌</button>
        </article>

        {data.map((d, i) => (
          <article className="movie-card" key={i}>
            <h3>{d.title}</h3>
            <h4>{d.year}</h4>
            <button>✏️</button>
            <button>❌</button>
          </article>
        ))}
      </div>
      <Link to="/Addmovie" role="button">
        ➕
      </Link>
    </Layout>
  );
};

export default HomePage;
