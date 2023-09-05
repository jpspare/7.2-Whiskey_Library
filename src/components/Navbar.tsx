import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

import { useViewport } from '../custom-hooks/viewport-hook';
import DropdownContent from './DropdownContent';
import MyButton from './MyButton';


function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const dropDown = () => {setIsVisible(!isVisible)};
    const clicked = () => {setIsVisible(false)};
    const handleCallback = () => {setIsVisible(!isVisible)};
    const { isMobile } = useViewport();
    
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const signOutOnClick = () => {logout()};
    const signInOnClick = () => {loginWithRedirect(); useViewport()}
    

    return (
        <nav 
            className='sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-sm 
                bg-opacity-10 border-b border-b-slate-100'>
            <div className="mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div>
                        <Link
                            onClick={clicked}
                            className='font-light text-2xl text-slate-100 tracking-wide'
                            to='/'>
                                Whiskey Library
                        </Link>
                    </div>
                    { isMobile ? (
                        <div>
                            <button
                                onClick={dropDown}
                                className='flex items-center px-3 py-2 text-slate-100
                                border rounded border-slate-100 hover:text-white
                                hover:border-white'>
                                    <i className='fas fa-bars'></i>
                            </button>
                            <DropdownContent 
                                isVisible={isVisible} 
                                parentCallback={handleCallback}
                            />
                        </div>
                    ) : (
                        <div className="text-md">
                            <Link 
                                to='/' 
                                onClick={ clicked } 
                                className='text-slate-100 hover:text-white 
                                    mr-2 sm:mr-0'
                            >
                                <MyButton>Home</MyButton>
                            </Link>
                            <Link 
                                to='/about' 
                                onClick={ clicked } 
                                className='text-slate-100 hover:text-white 
                                    mr-2 sm:mr-0'
                            >
                                <MyButton>About</MyButton>
                            </Link>
                            <Link 
                                to='/dashboard' 
                                onClick={ clicked } 
                                className='text-slate-100 hover:text-white 
                                mr-2 sm:mr-0'
                            >
                                <MyButton>Dashboard</MyButton>
                            </Link>
                            {
                                !isAuthenticated ? 
                                <Link to='/' onClick={signInOnClick} className='flex 
                                        justify-end sm:inline-block lg:mt-0 text-stone-300 
                                        hover:text-white mr-2 sm:mr-0'
                                    >
                                    <MyButton>Login</MyButton>
                                </Link>
                                :
                                <Link to='/' onClick={signOutOnClick} className='flex 
                                        justify-end sm:inline-block lg:mt-0 text-stone-300 
                                        hover:text-white mr-2 sm:mr-0'
                                    >
                                    <MyButton>Logout</MyButton>
                                </Link>
                            }
                        </div>
                    ) }
                </div>
            </div>
        </nav>
    )  
}

export default Navbar