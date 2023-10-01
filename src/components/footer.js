import React from 'react'
export default function Footer() {
  const handleWhatsapp=()=>{
    const whatsappLink = `https://wa.me/917640884453`;
    window.open(whatsappLink)
  }
  const handleInsta=()=>{
    window.open('https://instagram.com/pynns.fast.food?igshid=MzRlODBiNWFlZA==')

  }
  const handleEmail=()=>{
    window.open(`mailto:lamshuwamanbha@gmail.com`)
  }
  return (
    <div className="footer">
      <div>Made By Lp</div>
      <div className="footerItem">
        <div>
          <img className="social" src={require('../image/whatsapp.png')} alt="" width="40px" height="40px" onClick={handleWhatsapp}/>
          <img className="social" src={require('../image/instagram.png')} alt="" width="40px" height="40px" onClick={handleInsta}/>
        </div>
      <div onClick={handleEmail}
      style={{cursor:'pointer'}}
      >lamshuwamanbha@gmail.com</div>
      </div>
    </div>
  )
}
