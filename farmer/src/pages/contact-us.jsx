import React from "react";
import IconButton from '@mui/material/IconButton';
// import Icon from '@mui/material/Icon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Contact= () =>{
  return (
   <div className="contact-cont">
    <h1>CONTACT US</h1>
    <div className="contact-icon">
        <div className="location">
        <div className="icon-cont">
      <IconButton>
        <LocationOnIcon style={{ fontSize: '3rem',color:'green' }} />
      </IconButton>
    </div>
          <h5>OFFICE</h5>
          <li>kabarore-marimba-ngarama NS no123</li>
        </div>
        <div className="location">
        <div className="icon-cont">
      <IconButton>
        <PhoneIcon style={{ fontSize: '3rem',color:'green'}}  />
      </IconButton>
    </div>
           <h5>PHONE</h5>
           <li>+250789926331</li>
           <li>+250783801966</li>
        </div>
        <div className="location">
        <div className="icon-cont">
      <IconButton>
        <WhatsAppIcon style={{ fontSize: '3rem',color:'green' }}  />
      </IconButton>
    </div>  
          <h5>WHATSAPP</h5>
          <li>+250789926331</li>
          <li>+250783801966</li>
        </div>
        <div className="location">
        <div className="icon-cont">
      <IconButton>
        <MailOutlineIcon style={{ fontSize: '3rem',color:'green' }} />
      </IconButton>
    </div>    
           <h5>EMAIL</h5> 
           <li>rrf@gmail.com</li>
        </div>

    </div>
   </div>
  ) 
}


export default Contact