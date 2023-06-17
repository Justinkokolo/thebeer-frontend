import "./Modal.css";
import { X as CloseIcon } from "lucide-react";

const Modal = ({ setShowModal, children }) => {
  return (
    <>
      <div className="modal" onClick={() => setShowModal(false)}>
        <div className="modal-content">
          {children}
          <CloseIcon
            className="modal-closeIcon"
            onClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
