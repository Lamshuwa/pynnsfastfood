import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import plus from '../image/plus.png'
import minus from '../image/minus.png'
import { v4 as uuidv4 } from 'uuid';

// Create a memoized version of the MyVerticallyCenteredModal component
const MyVerticallyCenteredModal = React.memo(function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="backgroundLogo">
        
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="modalBody">

        
        <div>
          
          <br />
          <img className="incrementer" src={minus} alt="" onClick={props.decrement}/>
          {/* <button onClick={props.decrement}>-</button> */}
          <span className="counter">{props.counter}</span>
          <img className="incrementer" src={plus} alt="" onClick={props.increment}/>
          <h4 style={{textAlign:'center',marginTop:'10px',fontFamily:'Roboto'}}>Quantity in half</h4>
          {/* <button onClick={props.increment}>+</button> */}
        </div>
        </div>
      </Modal.Body>
      <div style={{marginLeft:'10px'}}>{props.name}</div>
        <div className="modalBtn">
        <div className="price">
            <h3>Rs. {props.price}/half</h3>
        </div>
        <div>
        <Button variant="success" onClick={props.handleAdd}>
          Add To List
        </Button>
        </div>
        </div>
        
        </div>
    </Modal>
  );
});

export default function AddModal({ name, food, setFood, id,price ,toggleShaking}) {
  const [modalShow, setModalShow] = useState(false);
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAdd=()=>{
    const newItem = { item: name, quantity: counter,id:uuidv4(),price:price };

    // Update the list of food by adding the new item to the existing array
    setFood([...food, newItem]);
    toggleShaking()
    setModalShow(false)
  }

  return (
    <div>
      <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        {name}
      </div>

      {modalShow && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={name}
          counter={counter}
          increment={incrementCounter}
          decrement={decrementCounter}
          handleAdd={handleAdd}
          price={price}
        />
      )}
    </div>
  );
}
