import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import HeaderSlider from "./HeaderSlider"



function Header () {
    return (
        <div className='header'>
           <HeaderTop />
           <HeaderSlider />
           {/* <HeaderBottom />  */}
        </div>
    )
}

export default Header