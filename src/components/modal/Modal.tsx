import React, {useState} from 'react'
import "./Modal.css"

const Modal = () => {

    const [modal, setModal] = useState(false)
    

  return (
    <div className='modal'>
        <div className="overlay">
        </div>
        <div className="modal-content">
            <h2>Hello Modal</h2>
        </div>
    </div>
  )
}

export default Modal