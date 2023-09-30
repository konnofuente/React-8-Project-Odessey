

// import { jsx,css } from '@emotion/react'
// import React from 'react'

import { Drawer } from '@mui/material'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import React from 'react'
import NavButton from './fragments/NavButton/NavButton'
import './Header.css'



function MobileHeader({scroll}){
    const [drawer, setDrawer] = React.useState(false)
    const handleDrawer = ()=>{
        setDrawer(prev => !prev)
    }


    return(
        <div>
                <div className={scroll>200?'sticky-box flex-btw flex-cnt':'header-box flex-btw flex-cnt'}>
      <div className='flex-arn flex-cnt'>
      <img src="https://konnomelifuente.online/wp-content/uploads/2023/09/cropped-konnoFuente-logo-type-white-e1693944995879-300x298.png" alt="" />
        <p className='logo'>kf-booking</p>
      </div>
      <div className='headerButtonContainer'>
        <FiMenu size={40} onClick={handleDrawer}/>
        <Drawer open={drawer} anchor='top'>
                <div className='mobile-drawer-container'>
                    <div className='flex-btw'>
                        <p></p>
                        <MdOutlineCancel size={40} onClick={handleDrawer} fill='#ffffff'/>
                    </div>
                    <div>
                    <NavButton text='Home'/>
                    <NavButton text='Around me' link='/AroundMe'/>
                    <NavButton text='Search' link='/Search'/>
                    <NavButton text='ABOUT ME' link='/Contact'/>
                    </div>
                </div>
        </Drawer>
      </div>
    </div>

        </div>
    )
}

export default MobileHeader
