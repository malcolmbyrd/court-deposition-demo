import React from 'react';
import { FaTimes } from 'react-icons/fa';

export const Header = ({title, closeFunction}) => {

  return (
    <div className="modal-header">
      <div className="modal-title">
        <h1>{title}</h1>
      </div>
      <div className="modal-close" onClick={closeFunction}>
        <FaTimes />
      </div>
    </div>
  );
};

export const Content = ({children, className}) => (
  <div className={`modal-content ${className}`}>
    {children}
  </div>
);

export const Modal = ({classname, children}) => (
    <div className={`modal modal-outer ${classname}`}>
      <div className={`modal modal-inner ${classname}`}>
        {children}
      </div>
    </div>
  );
