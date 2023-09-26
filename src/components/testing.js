import React,{useState,useEffect} from 'react'

export default function Testing() {
    const [name,setName]=useState('')
    const [msg,setMsg]=useState('')
    const message = encodeURIComponent(msg);
  const phoneNumber = '918837078417'; // Optionally, you can specify a phone number.

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const [item,setItem]=useState([])
    const [showList,setShowList]=useState(false);
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        
        if (checked) {
          // Add the name to the item list if checked
          setItem([...item, name]);
        } else {
          // Remove the name from the item list if unchecked
          setItem(item.filter((itemName) => itemName !== name));
        }
      };
    //   useEffect(() => {
    //     console.log(item);
    //   }, [item]);

      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(item)
        setMsg("Name:"+name+"\n"+"Your Order is:\n"+item+"\n(Packing)")
        setShowList(true)
        
      }
      const handleList=()=>{
        window.open(whatsappLink);
        window.location.reload();


      }
    
      
     

  return (
    <div>
      This is a just a test and its working!Hurray
<br />
      <input type="text" placeholder="Please Fill Your name" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <label>Chow</label>
      <input type="checkbox" name="chow" checked={item.name} onChange={handleCheckboxChange}/>
      <br />
      <label>Momo</label>
      <input type="checkbox" name="momo" checked={item.name} onChange={handleCheckboxChange}/>
    <button onClick={handleSubmit}>Save</button>
    <br />
{
    showList&&
    <>
    <div>Hi {name}! Your Order is:</div>
     {item.map((l, index) => (
        <div key={index}>{l}</div>
      ))}
    {/* <a href={whatsappLink} target="" rel="noopener noreferrer"> */}
    {/* Share on WhatsApp */}
  {/* </a> */}
  <button onClick={handleList}>Send</button>
 
  </>
}
    
   
    </div>

  )
}
