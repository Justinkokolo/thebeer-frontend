import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getBeerDetails } from '../services/beerService';
import "./Modal.css";
import { X as CloseIcon } from "lucide-react";

const Modal = ({ showModal, setShowModal, children }) => {
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
