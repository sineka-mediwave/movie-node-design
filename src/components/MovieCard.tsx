import { Link } from "react-router-dom";
import { IMovie } from "../type";

const MovieCard: React.FC<IMovie> = (d) => {
  return (
    <>
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
    </>
  );
};
