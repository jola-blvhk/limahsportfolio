"use client";

import React, { useState, useEffect, useRef } from "react";

export const CarouselModal = ({ show, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(show);
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div
            ref={modalRef}
            className=" p-3 z-20 md:w-4/5 overflow-y-auto max-h-full"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
