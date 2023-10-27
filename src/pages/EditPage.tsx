import Layout from "../components/Layout";
import Form from "../components/Form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("Getting info of ", id);
  }, [id]);

  return (
    <Layout title="edit">
      <h1>Edit</h1>
      <Form type="edit" />
    </Layout>
  );
};

export default EditPage;
