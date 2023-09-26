
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import helpModal from '../image/helpModal.jpg'
export default function StartModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   // const handleShow = () => setShow(true);
  return (
    <div>

      <Modal show={show} onHide={handleClose} theme="dark">
        {/* <Modal.Header closeButton>
          <Modal.Title>Guide</Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body> */}
        
            <div className="startModalBody">               
                    {/* <div className="startModalBodyHead1">
                        Guide
                    </div> */}
                    <img className="startModalBodyHead2"
                    src={require('../image/close.png')} alt="" 
                    onClick={handleClose}/>
            <img src={helpModal} alt="" className="startModalimg"/>
            </div>
            
        {/* </Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

    </div>
  )
}
