import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function NewTest() {
    const [item,setItem]=useState({})
    const [name,setName]=useState('')
    const [qty,setQty]=useState('');

    const handleCheck=(e)=>{
        console.log(qty)
        const {name,checked,value} =e.target
        setItem((prev)=>({...prev,[name]:{id:uuidv4(),[name]:checked,quantity:qty}}))
    }
    const handleSend=()=>{
        console.log(item)
    }

    const handleQuantity=(e)=>{
        let value=e.target.value
        setQty(value)
    }

  return (
    <div>
        <h3>Pynn's Fast Food Online Services</h3>
      <label htmlFor="">Please Enter Your Name:</label>
      <br />
      <input type="text" />
      <br /><hr style={{marginRight:'80%'}}/>
      <label htmlFor="">Chow</label>
      <input type="checkbox" checked={item.chow} name="Chow" value="1" onChange={handleCheck}/>
      <input type="number" placeholder="Quantity in half" value={item.quantity} onChange={handleQuantity}/>
      <br />
      <label htmlFor="">Momo</label>
      <input type="checkbox" checked={item.momo} name="Momo" value="2" onChange={handleCheck}/>
      <input type="number" placeholder="Quantity in half"  value={item.quantity} onChange={handleQuantity}/>
      <br />
      <button>Check Items</button>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}
