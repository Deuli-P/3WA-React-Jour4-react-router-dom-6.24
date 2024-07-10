import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPackage } from '../hooks/Fetch'

const Card = ({name}) => {


        const [ metaData, setMetaData ] = useState({})
        const [ loading , setLoading ] = useState(true)
    
        const handleFetch = async ()=> {
            const data = await fetchPackage(name)
    
            if(data){
                setMetaData(data)
            }
            else{
                throw new Error('Pas de Package trouvé à ce nom')
            }
        }
    
        useEffect(()=> {
            handleFetch()
        },[])
    
        useEffect(()=>{
            if(metaData){
                setLoading(false)
            }
        },[metaData])
    
        const LoadingView = ()=> (
            <div className='bg-slate-300 rounded-sm flex flex-row justify-center items-center gap-2 p-4'>
            <div className='flex flex-col gap-1 text-center'>
    
                <div className='w-full h-4 bg-slate-700'/>
                <div className='w-full h-8 bg-slate-900'/>
            </div>
            <div
                className=' px-8 py-2 border-2 border-black hover:bg-slate-50 duration-200 transition-all'
            />
        </div>
        ) 
    
      return (
        <>
            { loading ? 
                <LoadingView/>
                :
                (
                    <article className='bg-slate-300 rounded-sm flex flex-row justify-between items-center w-[400px] gap-2 p-4'>
                        <div className='flex flex-col gap-1 text-left'>
    
                            <span className='font-semibold text-lg'>{metaData.name}</span>
                            <p className='text-sm text-slate-600'>{metaData.description}</p>
                        </div>
                        <Link 
                            to={`/packages/${name}`}
                            className=' px-8 py-2 border-2 border-black hover:bg-slate-50 duration-200 transition-all'
                        >
                            View
                        </Link>
                    </article>
                )
            }
        </>
      )
}

export default Card