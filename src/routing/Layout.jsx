import { Outlet } from "react-router-dom"
import Header from "../components/HOC/Header"

const Layout = () => {

  return (
    <>
     <Header />
     <Outlet />
    </>
  )
}

export default Layout