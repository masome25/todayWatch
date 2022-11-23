import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import HeaderTop from "./HeaderTop"



function Layout () {
    return (
      <>

           <HeaderTop />
      
            <Outlet />
         
            <Footer />

      </>
    )
}

export default Layout