import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, signOutUser } from '../../config/firebase/firebasemethods';

function Nav() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setIsUser(true)
              return
          }else{
            setIsUser(false)
            return
          }
      })
  }, []
)

const logoutUser =() => {
  console.log('logout');
  signOutUser()
}

  return (
    <>
<div className="flex justify-between items-center bg-[#00D9C0] px-5 py-1">
  <h1 className="btn btn-ghost text-2xl font-sans font-semibold text-black">
    Blog App
  </h1>
  <div>
    {isUser ? 
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#9de9e0] text-black rounded-box z-[1] mt-3 w-40  shadow">
          <div className='flex justify-center gap-3 items-center flex-col w-full'>

        <li className='border border-zinc-500 rounded-xl w-full'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='border border-zinc-500 rounded-xl w-full ' onClick={logoutUser}><Link>Logout</Link></li>
        </div>

      </ul>
    </div> 
 :
<div>
    <button
    id="register-btn"
    className="btn btn-sm bg-[#00D9C0] border-none text-white hover:bg-[#00B5A0]"
  ><Link to='/login'>Login</Link>
    
  </button>
  <button
    id="register-btn"
    className="btn btn-sm bg-[#00D9C0] border-none text-white hover:bg-[#00B5A0]"
  ><Link to='/register'>Register</Link>
    
  </button>

    </div>    
}
  </div> 
</div>
    </>

  )
}




export default Nav