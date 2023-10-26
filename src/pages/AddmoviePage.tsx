import Layout from "../components/Layout";
import Form from "../components/Form";

const AddmoviePage = () => {
  return (
    <Layout title="movieForm">
      <h1>Add Movie</h1>
      <Form />
      <button type="submit">Add</button>
    </Layout>
  );
};

export default AddmoviePage;
