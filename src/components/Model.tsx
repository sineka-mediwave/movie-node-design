const Model = () => {
  return (
    <dialog open>
      <article>
        <h3>Confirm your action!</h3>
        <p>successfully done !</p>
        <footer>
          <a href="#cancel" role="button" className="secondary">
            Exit
          </a>
        </footer>
      </article>
    </dialog>
  );
};

export default Model;
