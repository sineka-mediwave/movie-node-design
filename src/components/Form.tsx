import { useState } from "react";

const Form = () => {
  return (
    <form>
      <div className="grid">
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
