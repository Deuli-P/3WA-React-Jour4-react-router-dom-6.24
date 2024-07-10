import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {


  return (
    <header className='flex flex-row justify-between items-center min-h-20 px-4 border-b-2 border-slate-700'>
            <NavLink to='/' className={isActive => isActive ? " text-black": "hover:underline hover:text-slate-700 text-slate-400 underline-offset-4"}>
                <span className='font-bold text-xl'>
                    NPM Resgitry
                </span>
            </NavLink> 
        <SearchBar />
    </header>
  )
}

export default Header