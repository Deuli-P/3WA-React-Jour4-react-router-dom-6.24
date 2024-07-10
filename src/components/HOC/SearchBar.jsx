import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const [ value, setValue ] = useState('')
    const navigate = useNavigate()

    const onChange =(e)=>{
        setValue( e.target.value)
    }

    const handleSubmit= () => {
        navigate(`/search?text=${encodeURIComponent(value)}`)
    }

    
  return (
    <div className=' bg-slate-300 flex flex-row h-[24px] justify-between items-center rounded-lg '>
        <div 
            className=' text-white flex justify-center items-center w-full px-4 py-1 bg-blue-400 hover:bg-blue-600 rounded-l-lg'
            onClick={handleSubmit}
        >
            <FaSearch />
        </div>
        <input type="text" value={value}  onChange={onChange} className=' bg-transparent right-0'/>
    </div>
  )
}

export default SearchBar