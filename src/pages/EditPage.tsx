import Layout from "../components/Layout";
import Form from "../components/Form";

const EditPage = () => {
  return (
    <Layout title="edit">
      <h1>Edit</h1>
      <Form />
      <button type="submit">Save</button>
    </Layout>
  );
};

export default EditPage;
