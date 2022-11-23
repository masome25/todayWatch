import { UserContext } from "./UserContext"
import { useContext } from 'react';
import { useState } from 'react';
import SearchBox from "./SearchBox";



function HeaderTop () {

const[show, setShow]=useState(true)
const {user}  = useContext(UserContext)
function handleShow () {
    setShow(!show)
}

    return (
       <nav className='headerNav'>
        <div className='headerLogo'>TodayWatch</div>
        <div className='headerLinks'>
            <div className='headerMenu'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Movies</a></li>
                    <li><a href='#'>TV-Series</a></li>
                    <li><a href='#'>Document</a></li>
                    <li><a href='#'>Top IMDB</a></li>
                </ul>
            </div>
            <div className='headerSearch'>
               <SearchBox />
            </div>

          <div  className="headerSign">
          <p>   { user ?  user.username  : ''}</p>
          <div  className={ user ? 'noShow' : 'headerSign' } >
                <span><i className="fa fa-user"></i></span>
                <ul>
                <li><a href='/login' onClick={handleShow}>Login</a></li>
                <span> / </span>
                <li><a href='#'>Register</a></li>
                </ul>
             </div> 
            </div>
         
        </div>
       </nav>
    )
}

export default HeaderTop