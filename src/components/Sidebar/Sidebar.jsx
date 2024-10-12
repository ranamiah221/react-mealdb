import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Sidebar.css'
const Sidebar = () => {
    return (
        <nav className='bg-amber-400 rounded-lg mt-2 h-full'>
                 <ul>
                    <li className="text-xl font-medium px-4 pt-4 mb-2" >
                         <NavLink className="px-2 py-1" to='/'>Home</NavLink>
                    </li>
                    <li className="text-xl font-medium px-4 pt- mb-2" >
                         <NavLink className="px-2 py-1" to='/about'>About</NavLink>
                    </li>
                    <li className="text-xl font-medium px-4 pb-4 mb-2" >
                         <NavLink className="px-2 py-1" to='/meals'>Meals</NavLink>
                    </li>
                 </ul>
        </nav>
    );
};

export default Sidebar;