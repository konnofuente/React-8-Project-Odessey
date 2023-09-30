import Button from "../../fragments/Button/Button"
import NavButton from "./fragments/NavButton/NavButton"
import './Header.css'


function DesktopHeader({scroll}){


    return(
        <div>
 <div className={scroll>300?'sticky-box flex-arn flex-cnt':'header-box flex-arn flex-cnt'}>
      <div className='flex-arn flex-cnt'>
        <img src="https://konnomelifuente.online/wp-content/uploads/2023/09/cropped-konnoFuente-logo-type-white-e1693944995879-300x298.png" alt="" />
        <p className='logo'>Kf-travel</p>
      </div>
      <div>
        <div className='links'>
          <NavButton text='Home' link='/'/>
          <NavButton text='Around Me' link='/AroundMe'/>
          <NavButton text='Search' link='/Search'/>
        </div>
      </div>
      <div className='headerButtonContainer'>
        <Button text='BOOK NOW' linksTo='/Search'/>
      </div>
    </div>
        </div>
    )
}

export default DesktopHeader
