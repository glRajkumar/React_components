import ReactDOM from "react-dom";
import { ReactComponent as Cancel } from "../../svg/cancel.svg";

export function ModalHlp({ children, open }) {
  if (open) {
    return ReactDOM.createPortal(children, document.getElementById("modal-root"));
  }

  return null;
}

function Modal({ children, open, header = "", onClose, size = "mini" }) {
  return (
    <ModalHlp open={open}>
      <div className="dc" id="root-modal">
        <div className={`main-modal-cont ${size}`}>
          {
            header &&
            <div className="df-sb">
              <h1 className="df">
                {header}
              </h1>
              <Cancel className="modal-close-ic" onClick={onClose} />
            </div>
          }
          {children}
        </div>
      </div>
    </ModalHlp>
  );
}

export default Modal;
