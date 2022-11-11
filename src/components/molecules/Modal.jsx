import React from 'react'



const Modal = ({ children }) => (
    <div className="modal">
        <div className="modal__content">
            {children}
        </div>
    </div>
)

export default Modal