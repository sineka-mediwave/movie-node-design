import Layout from "../components/Layout";
import Form from "../components/Form";
import Model from "../components/Model";
import { addMovie } from "../services/api";
import { IMovie, IShowError } from "../type";
import { useState } from "react";

const AddmoviePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  async function handleAdd(m: IMovie) {
    try {
      const moviePayload = {
        title: m.title,
        year: m.year,
      };
      await addMovie(moviePayload);
      setShowModalMsg({
        action: "Succes",
        msg: "Movie successfully Added",
      });
    } catch (error) {
      if (error instanceof Error) {
        setShowModalMsg({
          action: "Failed",
          msg: error.message,
        });
      }
    } finally {
      setShowModal(true);
    }
  }
  return (
    <>
      <Layout title="movieForm">
        <h1>Add Movie</h1>
        <Form type="add" addingMovie={handleAdd} />
      </Layout>
      {showModal && <Model showModalMsg={showModalMsg} />}
    </>
  );
};

export default AddmoviePage;
