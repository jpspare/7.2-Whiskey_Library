import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



type DropdownProps = {
  isVisible: boolean;
  parentCallback: () => void;
}

const DropdownContent = ( props: DropdownProps) => {
  const { isVisible } = props;

  const onTrigger = () => {
    props.parentCallback();
  }

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const signOutOnClick = () => {logout();}
  const signInOnClick = () => {loginWithRedirect();}

  return (
    <div className={` ${isVisible ? 'absolute right-0' : 'hidden'}`}>
      <div 
        className="flex flex-col text-center mt-4 bg-black bg-opacity-50 
        border-l border-b border-slate-100 z-10"
      >
        <Link 
          to='/' 
          onClick={ onTrigger } 
          className='text-slate-100 hover:text-white mr-2 sm:mr-0'>
            <button 
              className='p-2 m-3 border border-transparent hover:border-slate-100 
              hover:bg-white hover:bg-opacity-30 rounded-sm'
            >
                Home
            </button>
        </Link>
        <Link 
          to='/about' 
          onClick={ onTrigger } 
          className='text-slate-100 hover:text-white mr-2 sm:mr-0'>
            <button
              className='p-2 m-3 border border-transparent hover:border-slate-100 
              hover:bg-white hover:bg-opacity-30 rounded-sm'
            >
                About
            </button>
        </Link>
        <Link 
          to='/dashboard' 
          onClick={ onTrigger } 
          className='text-slate-100 hover:text-white mr-2 sm:mr-0'>
            <button
              className='p-2 m-3 border border-transparent hover:border-slate-100 
              hover:bg-white hover:bg-opacity-30 rounded-sm'
            >
                Dashboard
            </button>
        </Link>
        {
          !isAuthenticated ? 
          <Link to='/' onClick={signInOnClick} className='text-slate-100 hover:text-white mr-2 sm:mr-0'
              >
              <button className='p-2 m-3 border border-transparent hover:border-slate-100 
              hover:bg-white hover:bg-opacity-30 rounded-sm'
              >
                Login
              </button>
          </Link>
          :
          <Link to='/' onClick={signOutOnClick} className='text-slate-100 hover:text-white mr-2 sm:mr-0'
              >
              <button className='p-2 m-3 border border-transparent hover:border-slate-100 
              hover:bg-white hover:bg-opacity-30 rounded-sm'
              >
                Logout
              </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default DropdownContent
