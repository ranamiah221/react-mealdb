import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Sidebar.css'
const Sidebar = () => {
    return (
        <nav className='bg-amber-400 rounded-lg mt-2'>
                 <ul>
                    <li className="text-xl font-medium px-4 pt-4 " >
                         <NavLink className="px-2 py-1" to='/'>Home</NavLink>
                    </li>
                    <li className="text-xl font-medium px-4 pb-4" >
                         <NavLink className="px-2 py-1" to='/about'>About</NavLink>
                    </li>
                 </ul>
        </nav>
    );
};

export default Sidebar;