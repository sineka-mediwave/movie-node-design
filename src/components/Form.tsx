import { useState } from "react";
import { IMovie } from "../type";
const Form = () => {
  const [movie, setMovie] = useState<IMovie>();

  return (
    <form>
      <div className="form-input">
        <label>
          Movie Title
          <input
            type="text"
            id="title"
            name="title"
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
            placeholder="Enter year"
            required
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
