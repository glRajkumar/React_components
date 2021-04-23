import { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => ({ toggleModal }))

    const toggleModal = () => setDisplay(pr => !pr)

    if (display) {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div onClick={toggleModal} className="modal-backdrop"></div>
                <div className="modal-box">
                    {props.children}
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    }

    return null;
});

export default Modal