import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, day, children }) => {
  if (!isOpen) return null;
  return (
    <div className={`modal ${isOpen && 'modal-active'}`}>
      <div className='modal-content'>
        <div className='modal-header'>
          day {day}
          <span className='close' onClick={onClose}>x</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;