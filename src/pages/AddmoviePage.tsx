import Layout from "../components/Layout";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../services/api";
import { IMovie } from "../type";

const AddmoviePage = () => {
  const navigate = useNavigate();

  async function handleAdd(m: IMovie) {
    try {
      const moviePayload = {
        title: m.title,
        year: m.year,
      };
      const res = await addMovie(moviePayload);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  }
  return (
    <Layout title="movieForm">
      <h1>Add Movie</h1>
      <Form type="add" addingMovie={handleAdd} />
    </Layout>
  );
};

export default AddmoviePage;
