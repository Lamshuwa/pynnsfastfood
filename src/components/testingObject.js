import React, { useState } from 'react';

export default function TestingObject() {
  const [list, setList] = useState({});
  const [named, setNamed] = useState('');
  const[share,setShare]=useState([])
  const [ll,setll]=useState([])


  const [msg,setMsg] =useState('')
  const message = encodeURIComponent('');
  const phoneNumber = '918837078417';

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${ll}`;

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;

    setList((prev) => ({
      ...prev,
      [checkboxName]: {
        checked: isChecked,
        qty: prev[checkboxName]?.qty || '',
      },
    }));
  };

  const handleQtyChange = (e) => {
    const checkboxName = e.target.name;
    const quantity = e.target.value;

    setList((prev) => ({
      ...prev,
      [checkboxName]: {
        checked: prev[checkboxName]?.checked || false,
        qty: quantity,
      },
    }));
  };
  const handleSubmit = (e) => {
    const selectedItems = Object.keys(list).filter((key) => list[key].checked);
    const selectedQuantities = selectedItems.map((item) => list[item].qty);
    const listLength = Object.keys(list).length;
       // console.log(listLength)
       console.log()
       for (let i = 0; i < listLength; i++) {
        const newItem = selectedItems[i] + selectedQuantities[i];
        setll((prev) => [...prev, newItem]);
      }
      
  };
  const asd=()=>{
    console.log(ll)
    window.open(whatsappLink)
    window.location.reload()
  }

  return (
    <div>
      This is just a test and it's working! Hurray
      <br />
      <input
        type="text"
        placeholder="Please Fill Your name"
        value={named}
        onChange={(e) => setNamed(e.target.value)}
      />
      <br />
      <label>Chow</label>
      <input
        type="checkbox"
        name="chow"
        onChange={handleCheckboxChange}
        checked={list['chow']?.checked || false}
      />
      <input
        type="text"
        placeholder="Qty"
        name="chow"
        value={list['chow']?.qty || ''}
        onChange={handleQtyChange}
      />
      <br />
      <label>Momo</label>
      <input
        type="checkbox"
        name="momo"
        onChange={handleCheckboxChange}
        checked={list['momo']?.checked || false}
      />
      <input
        type="text"
        placeholder="Qty"
        name="momo"
        value={list['momo']?.qty || ''}
        onChange={handleQtyChange}
      />
      <button onClick={handleSubmit}>Save</button>
      <br />
      
      <button onClick={asd}>asd</button>
  
    </div>
  );
}
