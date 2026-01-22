import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "animate-modalIn" : "animate-modalOut"
      }`}
    >
      <div className="h-full w-full overflow-y-auto flex items-center justify-center px-4">
        <div className="w-full max-w-6xl flex justify-center">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-10 z-50 text-yellow-500 hover:text-yellow-400 bg-transparent "
            >
              ✖
            </button>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
