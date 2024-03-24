
import { NavLink } from 'react-router-dom';
import logo from '../../../public/Resources/Logo.png';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import './NavBar.css'
const NavBar = () => {
    const [showmenu,setShowmenu] = useState(false)

    const handleShowMenu = () => {
        setShowmenu(!showmenu)
    }

    return (
        <header>
            <nav className='max-w-screen-xl md:py-12 py-4 flex justify-between items-center mx-auto'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className={`${showmenu ? 'right-0 ' : '-right-32'} top-16 transition-all lg:bg-transparent bg-[#FF444A] rounded-l-lg p-4 md:text-black text-white duration-500 text-right fixed text-lg lg:static flex md:flex-row flex-col md:gap-x-12 gap-y-2 font-semibold`}>
                    <NavLink className='a text-center lg:p-0 lg:rounded-none rounded-md p-1' to='/'>Home</NavLink>
                    <NavLink className='a text-center lg:p-0 lg:rounded-none rounded-md p-1' to='/donation'>Donation</NavLink>
                    <NavLink className='a text-center lg:p-0 lg:rounded-none rounded-md p-1' to='/statistics'>Statistics</NavLink>
                </ul>
                <div className='md:hidden'>
                    
                <button className='text-3xl' onClick={handleShowMenu}>{!showmenu ? <IoMenu></IoMenu> : <IoClose></IoClose>}</button>
                    
                </div>
            </nav>
        </header>
    );
};

export default NavBar;