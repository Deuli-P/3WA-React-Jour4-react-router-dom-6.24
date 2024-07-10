import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { fetchSearch } from '../hooks/Fetch';
import LoadingView from '../components/LoadingView';
import Card from '../components/Card';

const SearchPage = () => {

    const location = useLocation()

    const text = new URLSearchParams(location.search);
    const value = text.get('text');

    const [ query, setQuery ] = useState([])
    const [ loading, setLoading ] = useState(true)
    // Je récupere la value de searchbar et je l'envoi dans l'api

    const handleSearch = async() => {
        const response = await fetchSearch(value)

        if(!response){
            throw new Error("Pas de package correspondant")
        }

        setQuery(response.objects)
    }

    useEffect(()=> {
        handleSearch()
    },)

    useEffect(()=> {
        if(query){
            setLoading(false)
        }
    },[query])


  return (
    <>
        {loading ?
            (
                <LoadingView />
            )
            :
            (     
                <main className='flex flex-col justify-start items-center gap-6'>
                    <h2 className='mt-[20px] font-bold text-2xl'>Search Results</h2>
                    <section className='flex flex-col gap-5 justify-center items-center'>
                        { query.length > 1 ?
                            query.map((pckg,index)=>(
                                <Card key={`package-find-${index}`} name={pckg.package.name} />
                            ))
                        :
                        <span>Pas de réponse trouvé</span>
                        }
                    </section>
                </main>
            )
        } 
    </>
  )
}

export default SearchPage