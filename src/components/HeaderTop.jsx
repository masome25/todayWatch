

import { UserContext } from "./UserContext"
import { useContext, useState } from 'react';
import SearchBox from "./SearchBox";
import { Link, NavLink } from "react-router-dom";




function HeaderTop () {
   const [show, setShow] =useState(false)
   const {user, logout}  = useContext(UserContext)


    return (
       <nav className='headerNav'>
        <div className='headerLogo'>TodayWatch</div>
        <div className='headerLinks'>
            <div className='headerMenu'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Movies</NavLink></li>
                    <li><NavLink to='/'>TV-Series</NavLink></li>
                    <li><NavLink to='/'>Document</NavLink></li>
                    <li><NavLink to='/'>Top IMDB</NavLink></li>
                </ul>
            </div>
            <div className='headerSearch'>
               <SearchBox />
            </div>


           <div  className="headerSign">
             <p> 
             <Link to='/profile'> <i className="fa fa-user"></i> </Link>
                { user ?  user.username  : ''}
                <button onClick={logout} className={ !user ? 'noShow' : '' } > Logout </button>
                </p>
             <div  className={ user ? 'noShow' : '' } >
                <Link to='/login'>Login</Link>    
             </div> 
           </div>
         
        </div>
       </nav>
    )
}

export default HeaderTop