import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  
  return (
    <div className="w-full flex flex-row items-center shadow-md shadow-primary/50 pb-10 px-6 ">
      <div className="w-1/4 flex justify-start items-center text-primary font-bold text-2xl">
        Staff
      </div>
      <div className="w-2/4 py-[1%]  flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border bg-stone-950 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="w-1/4 flex justify-end items-center text-xl gap-10 font-bold">
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink 
                to={links.path} 
                className="hover:text-primary/80 transition-colors"
              >
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
