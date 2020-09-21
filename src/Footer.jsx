import React from'react';

const Footer = () =>{

 const year =new Date().getFullYear();

return (
<>
<footer>
    <p style={{textAlign: "center"}}>copyright © {year}</p>
</footer>
</>
);
};

export default Footer;