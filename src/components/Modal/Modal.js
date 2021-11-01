import { forwardRef, useImperativeHandle, useState } from "react";
import { ReactComponent as Cancel } from "../../svg/cancel.svg";
import ReactDOM from "react-dom";

const Modal = forwardRef(({ children, header = "" }, ref) => {
    const [display, setDisplay] = useState(false)

    useImperativeHandle(ref, () => ({ toggleModal }))

    const toggleModal = () => setDisplay(pr => !pr)

    if (display) {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div onClick={toggleModal} className="modal-backdrop"></div>
                <div className="modal-box">
                    {
                        header &&
                        <div className="df-sb">
                            <h1 className="df">
                                {header}
                            </h1>
                            <Cancel className="modal-close-ic" onClick={toggleModal} />
                        </div>
                    }
                    {children}
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    }

    return null
})

export default Modal