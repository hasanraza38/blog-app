import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
<div className="flex justify-between items-center bg-[#00D9C0] px-5 py-1">
  <a className="btn btn-ghost text-xl font-mono font-semibold text-white">
    Blog App
  </a>
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
</div>
    </>

  )
}

export default Nav