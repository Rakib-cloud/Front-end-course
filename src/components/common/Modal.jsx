import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, footer }) => {
    useEffect(() => {
        // Close modal on escape key
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 right-0 p-4 z-50 flex justify-end items-start">
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 animate-slideIn"
                style={{animation: "slideIn 0.2s ease-out forwards"}}
            >
                <div className="border-b px-4 py-3 flex justify-between items-center bg-gray-50 rounded-t-lg">
                    <h3 className="font-medium text-lg">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        ×
                    </button>
                </div>
                <div className="p-4">{children}</div>
                {footer && <div className="border-t px-4 py-3 bg-gray-50 rounded-b-lg">{footer}</div>}
            </div>

            {/* Add inline styles for animation */}
            <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default Modal;