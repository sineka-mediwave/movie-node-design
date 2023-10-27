import { useState } from "react";
import { IMovie } from "../type";
import { Link } from "react-router-dom";
interface IForm {
  type: string;
  addingMovie?: (m: IMovie) => void;
}

const Form: React.FC<IForm> = ({ type, addingMovie }) => {
  const [movie, setMovie] = useState<IMovie>({
    title: "",
    year: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(movie);
    if (addingMovie) {
      addingMovie(movie);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-input">
        <label>
          Movie Title
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => handleChange(e)}
            placeholder="Enter movie name"
            required
          />
        </label>

        <label>
          Release Year
          <input
            type="text"
            id="year"
            name="year"
            onChange={(e) => handleChange(e)}
            placeholder="Enter year"
            required
          />
        </label>
      </div>
      {type == "edit" ? (
        <div className="form-input home-bar">
          <button type="submit" className="form-btn">
            Update
          </button>
          <Link to="/" role="button" className="form-btn">
            Cancel
          </Link>
        </div>
      ) : (
        <div className="form-input home-bar">
          <button type="submit" className="form-btn">
            add
          </button>
          <Link to="/" role="button" className="form-btn">
            Back
          </Link>
        </div>
      )}
    </form>
  );
};

export default Form;
