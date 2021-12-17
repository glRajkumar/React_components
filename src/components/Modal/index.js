import { useRef, useState } from 'react';
import Modal from "./Modal";
import Modal2 from "./Modal2";
import "../../css/modal.css";

function ModalCont() {
    const [open2, setOpen2] = useState(false)
    const modalRef = useRef()

    const toggleHlp = () => {
        modalRef.current.toggleModal()
    }

    const onClk2 = () => setOpen2(p => !p)

    return (
        <div className="p-16">
            <div className='df mb-16'>
                <h1>Modal 1</h1>
                <button onClick={toggleHlp} className="open-modal">Open Modal</button>
                <Modal ref={modalRef} header="Modal Header">
                    <p><span>Modal 1 content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span></p>
                    <button onClick={toggleHlp}>Close Modal</button>
                </Modal>
            </div>

            <div className="df">
                <h1>Modal 2</h1>
                <button onClick={onClk2} className="open-modal">Open Modal</button>
                <Modal2
                    open={open2}
                    header="Modal Header"
                    onClose={onClk2}
                >
                    <p><span>Modal 2 content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span></p>
                </Modal2>
            </div>
        </div>
    )
}

export default ModalCont
