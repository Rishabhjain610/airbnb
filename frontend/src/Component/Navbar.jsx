import React from 'react'
import airbnblogo1 from '../assets/airbnblogo1.png' 
const Navbar = () => {
  return (
    <div>
      <div className='w-screen min-h-[80px]  border-b-[1px] border-black flex items-center justify-between'>
        <div>
          <img src={airbnblogo1} className='h-22 w-64 px-12 py-4'/>
        </div>
        <div>
        <input type="text"/>
        <button>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
