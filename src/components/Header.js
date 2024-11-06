import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function Header() {
   const [toggleMenu,setToggleMenu] = useState(false);
    return <header className="flex justify-between px-7 py-2 bg-black">
        <a className="font-bold text text-white p-3"href="#"> Movie Review&Rating</a>
        <form className='w-[400px] relative'>
            <div className="relative">
                <input type ="search" placeholder='Type Here' className='w-full p-4 rounded-full be-slate-800' />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-200 rounded-full'>
                    <AiOutlineSearch/>
                </button>
            </div>
        </form>
        <nav className="hidden md:block">
        <ul className="flex text-white p-3">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Movies">Movies</a></li>
            <li className='bg-red-500 text-white text-lg px-6 py-1 rounded-xl'><Link to="/Register">Register</Link> </li> 
            <li className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'><Link to="/Login">Login</Link> </li>
        </ul>    
        </nav>
        
        {toggleMenu && <nav className="block md:hidden ">
        <ul className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
        </ul>
        </nav>}
        <button  onClick={() => setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}