import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <>
    <h1> Error Page</h1>
    {isRouteErrorResponse(error)? 
        (<p>Page non valide </p>)
      :
        ( <p>Quelques chose cloche :/</p>)
    }

    <Link to='/' className="px-4 py-2 border-2 border-slate-900">Retour a l&apos;accueil</Link>
    </>
  )
}

export default ErrorPage