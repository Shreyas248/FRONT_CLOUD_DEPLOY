import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const Topbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 h-[4rem] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <ModeToggle />
                <Avatar>
                    <AvatarImage  alt="@shadcn" />
                    <AvatarFallback> SP </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar