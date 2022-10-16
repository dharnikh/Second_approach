import React from 'react'
import{NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"


const links = [{path:"/",title:"welcome"},
  {path:"/login",title:"Login"},

  {path:"/home",title:"Home"},



]

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        height:"50px",
        margin: "auto",
        backgroundColor:"black",
        color:"white",
        margin:"0px",
        padding:"0px",
      }}
    >
      {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  )
  }
export default Navbar
