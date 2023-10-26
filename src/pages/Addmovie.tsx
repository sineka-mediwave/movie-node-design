import Layout from "../components/Layout";

const Addmovie = () => {
  return (
    <Layout title="movieForm">
      <form className="container">
        <h1>Add Movie</h1>
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
        <button type="submit">Add</button>
      </form>
    </Layout>
  );
};

export default Addmovie;
