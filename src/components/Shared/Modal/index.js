import React from "react";

const Modal = () => {
    return (
        <div className="flex flex-col gap-y-4 w-96 h-96 outline outline-1 outline-primaryColor">
            <div><h1>Do you want to Delete this record</h1></div>
            <div className="flex gap-2">
                <button>yes</button>
                <button>no</button>
            </div>
        </div>
    )
}

export default Modal;