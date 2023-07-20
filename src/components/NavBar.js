import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map((links,index)=>{
    return <a href={`#${links}`} key={index}>{links}</a>
  })
  return <nav>{linksList}</nav>;
}

export default NavBar;
