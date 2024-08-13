import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full h-[15%] flex flex-col justify-center items-center border-t-2 border-primary/50 py-2">
      <div className="w-full max-w-4xl flex justify-between items-center text-primary font-bold text-xl ">
        <div className="text-lg">© Staff Scheduling 2024</div>
        <div className='flex flex-row justify-end items-center gap-8'>
          <a href='#' target='_blank' className='h-12 w-12 rounded-full text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center transition-all'>
            <Facebook className='h-7 w-7' />
          </a>
          <a href='#' target='_blank' className='h-12 w-12 rounded-full text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center transition-all'>
            <Twitter className='h-7 w-7' />
          </a>
          <a href='#' target='_blank' className='h-12 w-12 rounded-full text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center transition-all'>
            <Linkedin className='h-7 w-7' />
          </a>
          <a href='#' target='_blank' className='h-12 w-12 rounded-full text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center transition-all'>
            <Youtube className='h-7 w-7' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
