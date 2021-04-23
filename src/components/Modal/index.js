import { useRef } from 'react';
import Modal from "./Modal";
import "../../css/modal.css";

function ModalCont() {
    const modalRef = useRef()

    const toggleHlp = () => {
        modalRef.current.toggleModal()
    }

    return (
        <div className="modal-app">
            <h1>Modal app</h1>
            <button onClick={toggleHlp} className="open-modal">Open Modal</button>
            <Modal ref={modalRef}>
                <h1>Modal Header</h1>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span></p>
                <button onClick={toggleHlp}>Close Modal</button>
            </Modal>
        </div>
    )
}

export default ModalCont
