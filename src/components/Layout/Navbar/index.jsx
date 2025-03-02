import React from 'react'
import { Link, NavLink } from "react-router"
const Navbar = () => {
   const links=[
    {id:0, href:'/' , title:"Home"},
    {id:1, href:'/about' , title:"About"},
    {id:2, href:'/product' , title:"Product"},
    {id:3, href:'/users' , title:"Users"},
   ];


  return (
    <div className='navbar'>
       <div>
        <Link to="/">/Logo</Link>
       </div>
      
       <div className="links">
         {links.map(({ id,href,title })=>
          {return(<NavLink key={id}  to={href} >{title}</NavLink>)
           })
         }
       </div>
    </div>
  )
}

export default Navbar 
