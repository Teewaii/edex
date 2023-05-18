import React from 'react'

function Modal({ toggle, handleToggle }) {
    return (
        < div className={!toggle ? 'bg-Herogreen min-h-screen absolute inset-x-0 top-0 inset-y-0 opacity-80 lg:hidden ' : 'hidden'}
            onClick={handleToggle}
        >
        </div >
    )
}

export default Modal