import React, { useEffect, useState } from "react";
import "./Footer.css";
import send from "../../assets/images/send.png";
const Footer = () => {
  const [mail,setMail]=useState("")
  const [vaildMail,setVaildMail]=useState(true)

  const validateMail = (mail) => {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setVaildMail(emailpattern.test(mail))
    return emailpattern.test(mail);
  };

  const handleCheckMailOnClick=()=>{
    const result = validateMail(mail)
        if(result)
        {
          alert("Message is send successully")
        }
        else{
          alert("Write a correct mail")
        }
  }

  const handleCheckMail=()=>{
        const result = validateMail(mail)
  }
  
  let class1= vaildMail ? "inp" :"inp1";
  useEffect(()=>{
    if(mail.length>0)
       {handleCheckMail()}
  },[mail])

  return (
    <div className="footer">
      <div className="footerup">
        <div>
          <div className="footerlefttext">Newsletter</div>
          <div className="footerlefttext1">
            Get news about articles and updates in your inbox.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div>
            <input placeholder="NAME" className="inp" />
          </div>
          <div>
            <input onChange={(event)=>setMail(event.target.value)} placeholder="EMAIL" className={class1} />
          </div>
          <div className="input">
            <input placeholder="MESSAGE" className="inp" />
          </div>
        </div>
      </div>
      <div className="footerlow">
        GET <br />
        IN TOUCH
      </div>
      <div className="sendimg">
        <img className="sendimg1" onClick={handleCheckMailOnClick} src={send} alt="send" />
      </div>
      <div className="footerlow1">
        GET <br />
        IN
        <br />
        TOUCH
      </div>
    </div>
  );
};

export default Footer;
