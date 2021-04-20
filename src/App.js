import { useContext, useState, useRef } from 'react';
import { ToastifyContext } from './state/Toastify/ToastifyContextProvider';
import shortid from "shortid";
import Modal from "./Modal";
import "./css/toastify.css";
import "./css/modal.css";

function App() {
  const dispatch = useContext(ToastifyContext)
  const [msg, setMsg] = useState("")
  const modalRef = useRef()

  const openModal = () => {
    modalRef.current.openModal()
  };

  const add = (type) => {
    const id = shortid.generate()

    dispatch({
      type: "ADD",
      payload: { id, msg, type }
    })
  }

  return (
    <>
      <input
        type="text"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button onClick={() => add("success")}>Add as Success</button>
      <button onClick={() => add("error")}>Add as Error</button>

      <br />
      <br />

      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span></p>
        <button onClick={() => modalRef.current.close()}>
          Close Modal
        </button>
      </Modal>

    </>
  );
}

export default App;
