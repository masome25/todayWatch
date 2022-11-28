import { Outlet } from "react-router-dom"
import Footer from "./Footer"
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