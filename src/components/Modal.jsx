import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // Match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? "animate-modalIn" : "animate-modalOut"
      }`}
    >
      <div className="bg-black rounded-lg p-6 w-full max-w-md text-white relative shadow-yellowGlow sm:p-4 sm:w-11/12">
        <button
          onClick={onClose}
          className="bg-black absolute top-2 right-2 text-yellow-500 hover:text-yellow-400 border-none outline-none"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
