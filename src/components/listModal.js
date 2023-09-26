import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import plate from '../image/plate3.png'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create a memoized version of the MyVerticallyCenteredModal component

const MyVerticallyCenteredModal = React.memo(function MyModal(props) {
  //const [list, setList] = useState(props.food)
  
  // console.log(...list)
  useEffect(() => {
    // Calculate the total sum by iterating through the items in props.food
    const totalSum = props.food.reduce((acc, item) => {
      return acc + parseInt(item.price) * item.quantity;
    }, 0);

    props.setSum(totalSum);
  }, [props]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        {
          <ul>
            {
            props.food.length!==0?
            props.food.map((item) => (
              <>
              <li key={item.id}>{item.item}-{item.quantity} half <img onClick={()=>props.handleDelete(item.id)}src={require('../image/delete.png')} alt="" width="25px" height="25px"/></li>
              </>
            ))
          :
          <div>
            <img src={require('../image/empty.png')} alt="" width="150px" height="100px" />
          </div>
          }
          </ul>
        }
        <div className="modalName">
        
        <br />
        <input type="text" placeholder="Please Enter Your Name.."
        value={props.name} onChange={e=>props.setName(e.target.value)}
        style={{border:props.nameError&&'2px solid red'}}
        />
      </div>
        <div>
          Total Price(Excluding Packing):Rs.{props.sum}
        </div>
      </Modal.Body>
      <Modal.Footer>
        *Once you click this button it will redirect you to Whatsapp
        .You can proceed the order by sharing the message with us.
        (Note that if the message is empty, you can go back to your online menu and resubmit your order) 
        <Button variant="danger" onClick={props.handleShare}>
          Place Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default function ListModal({ food, setFood ,isShaking,vibrate}) {
  const [modalShow, setModalShow] = useState(false);
  const newArray = food.map(({ id,price, ...food }) => food);
  const [name,setName]=useState('')
  const [sum,setSum]=useState(0)
  const [nameError,setNameError]=useState(false)
  const date=new Date();
  const stringWithoutExample = JSON.stringify(newArray).replace(/[{"}]/g, '');
  console.log(stringWithoutExample)
 // const message = encodeURIComponent("Name:"+name+"\n"+"Date:"+date+"\n"+stringWithoutExample+"\n"+"Total price:"+sum);
 const message = encodeURIComponent(
  `Name: ${name}\n` +
  `Date: ${date}\n` +
  `${stringWithoutExample}\n`+
  `Total price: ${sum}`
)
 const phoneNumber = '917640884453'; //Optionally, you can specify a phone number.

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(()=>{
    setNameError(false)
  },[name])
  const handleShare = () => {
    if(food.length===0){
      toast.error('List is Empty')
    }else
    if(name===''){
      toast.error('Please Enter Your Name!')

      setNameError(true)
    } 
    else
    {
      console.log(newArray)
      window.open(whatsappLink)
    }  
  }
  const handleDelete=(id)=>{
    const filteredDelete=food.filter((l)=>(l.id!==id))
    setFood(filteredDelete)
  vibrate();
  }


  return (
    <div>
      <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
        <div className="burger" id={isShaking?"shake":""} >
          <img src={plate} alt="" width="60px" height="60px"/>
          {/* <button onClick={asd}>View List</button> */}
        </div>
      </div>

      {modalShow && (
        <MyVerticallyCenteredModal
          show={modalShow}
          food={food}
          handleShare={handleShare}
          onHide={() => setModalShow(false)}
           handleDelete={handleDelete}
           setName={setName}
           name={name}
           setNameError={setNameError}
           nameError={nameError}
           setSum={setSum}
           sum={sum}
        />
      )}
    </div>
  );
}
