// Fichier des fetch 

const url_npm = 'https://registry.npmjs.com/'

// https://registry.npmjs.com/-/v1/search?query={text}&size=4
export const fetchSearch = async(input)=> {
    const send = await fetch(url_npm+`-/v1/search?text=${input}&size=4`,{
        method:'GET',
    })

    if(!send){
        throw new Error('Erreur dans la recherche de package')
    }

    const result = send.json()
    
    return result
    
    // Il faut 
}


export const fetchPackage = async(name) => {
    const send = await fetch(`${url_npm}${name}/latest`,{
        method:'GET',
    })
    if (!send.ok) {
        throw new Error('Package non existant');
      }

    
    const result = await send.json()

    return result
}