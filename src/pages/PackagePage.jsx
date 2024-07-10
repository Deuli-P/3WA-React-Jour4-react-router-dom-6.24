import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPackage } from "./../hooks/Fetch"

const PackagePage = () => {

    const [ metaData, setMetaData ] = useState(null)
    const [ loading , setLoading ] = useState(true)
    const { name } = useParams() 

    console.log(name);

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
        console.log('ping');
    },[])

    useEffect(()=>{
        if(metaData){
            setLoading(false)
        }
    },[metaData])


    const LoadingView = ()=> (
        <main>
            <h1>Chargement...</h1>
        </main>
    ) 

  return (
    <>
        { loading ? 
            <LoadingView/>
            :
            (
            <main className='flex flex-col gap-8 w-full p-10'>
                <section className='flex flex-col justify-start gap-3 w-full bg-slate-300 p-4 rounded-lg'>
                    <h2 className=' font-bold text-lg'>{metaData.name}</h2>
                    <p className='text-sm'>{metaData.description}</p>
                </section>
                <section className='flex flex-col justify-start gap-3 w-full'>
                    <h2 className=' font-bold text-lg'>Maintenaiers</h2>
                    <ul className='flex flex-col justify-start'>
                        {metaData.maintainers?.map(idv => (
                            <li className='px-2 w-full border-[1px] border-slate-400 rounded-sm' key={`maintainer-${idv.name}`}>
                                <span>{idv.name} - {idv.email}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='flex flex-col justify-start gap-3 w-full'>
                    <h2 className=' font-bold text-lg'>Licences</h2>
                    <ul>
                        <li className=' px-2 w-full border-[1px] border-slate-400 rounded-sm'>
                            <span>{metaData.license}</span>
                        </li>
                    </ul>
                </section>
                <section className='flex flex-col justify-start gap-3 w-full'>
                    <h2 className=' font-bold text-lg'>HomePage</h2>
                    <ul>
                        {metaData?.repository ?
                            (
                                    <li className=' px-2 w-full border-[1px] border-slate-400 rounded-sm'>
                                        <span>{metaData.repository.url}</span>
                                    </li>
                            )
                            :
                            (
                                <li className='w-full text-center font-semibold underline-offset-2 underline'>
                                    <span className=''>Pas de site ou repository renseigné</span>
                                </li>
                            )
                        }
                        </ul>
                </section>
            </main>
            )
        }
    </>
  )
}

export default PackagePage